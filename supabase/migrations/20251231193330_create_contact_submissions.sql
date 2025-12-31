/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the contact form
      - `email` (text) - Email address of the person
      - `subject` (text) - Subject of the message
      - `message` (text) - The actual message content
      - `created_at` (timestamptz) - Timestamp when the submission was created
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anyone to insert contact submissions (public form)
    - No read access policies (only admin should read via dashboard)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);