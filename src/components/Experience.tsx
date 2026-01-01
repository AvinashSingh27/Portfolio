import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'API Integration Engineer',
      company: 'Infinite Computer Solutions Pvt. Ltd.',
      period: '2024 - Present',
      location: 'Hyderabad, India',
      description: 'Leading cloud architecture and DevOps initiatives for enterprise healthcare applications',
      achievements: [
        'Architected and deployed 5 major healthcare applications on Azure, serving over 100,000+ users',
        'Implemented CI/CD pipelines reducing deployment time by 70% using Azure DevOps',
        'Developed and deployed 2 AI-powered solutions on Azure ML for predictive healthcare analytics',
        'Managed Infrastructure as Code using Terraform, automating cloud resource provisioning',
        'Established DevOps best practices including containerization with Docker and Kubernetes',
        'Led security implementation achieving HIPAA compliance for healthcare data processing'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <Briefcase size={20} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Current Role
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg">{exp.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-lg mb-4">
                    Key Achievements:
                  </h4>
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2
                        className="text-green-600 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;