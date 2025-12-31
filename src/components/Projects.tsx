import { ExternalLink, Heart, Brain, Activity, Users, FileText, Calendar, Stethoscope } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Patient Management System',
      category: 'healthcare',
      icon: Users,
      description: 'Enterprise-grade patient management system with real-time data synchronization across multiple healthcare facilities.',
      technologies: ['Azure App Service', 'Azure SQL', 'Azure AD B2C', 'React', 'SignalR'],
      highlights: [
        'Manages 50,000+ patient records',
        'HIPAA compliant architecture',
        'Real-time notifications',
        '99.9% uptime SLA'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Electronic Health Records (EHR)',
      category: 'healthcare',
      icon: FileText,
      description: 'Comprehensive EHR system with interoperability features and advanced security measures.',
      technologies: ['Azure Kubernetes', 'Cosmos DB', 'Azure API Management', 'FHIR'],
      highlights: [
        'HL7 FHIR compliant',
        'Multi-tenancy support',
        'Advanced encryption',
        'Audit logging'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Telemedicine Platform',
      category: 'healthcare',
      icon: Activity,
      description: 'Cloud-based telemedicine solution enabling virtual consultations with integrated billing and scheduling.',
      technologies: ['Azure Communication Services', 'Azure Functions', 'Azure Storage', 'WebRTC'],
      highlights: [
        'HD video consultations',
        'Integrated scheduling',
        'E-prescriptions',
        'Payment gateway'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Healthcare Analytics Dashboard',
      category: 'healthcare',
      icon: Activity,
      description: 'Real-time analytics platform providing insights into hospital operations and patient outcomes.',
      technologies: ['Azure Synapse', 'Power BI Embedded', 'Azure Data Factory', 'Machine Learning'],
      highlights: [
        'Real-time KPI tracking',
        'Predictive analytics',
        'Custom reports',
        'Data visualization'
      ],
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Appointment Scheduling System',
      category: 'healthcare',
      icon: Calendar,
      description: 'Intelligent appointment management system with automated reminders and resource optimization.',
      technologies: ['Azure Logic Apps', 'Azure Service Bus', 'Azure Notification Hub', 'Twilio'],
      highlights: [
        'Smart scheduling',
        'SMS/Email reminders',
        'Resource optimization',
        'Multi-channel booking'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI Disease Prediction System',
      category: 'ai',
      icon: Brain,
      description: 'Machine learning model for early disease prediction using patient data and medical imaging.',
      technologies: ['Azure ML', 'Azure Cognitive Services', 'Python', 'TensorFlow', 'Docker'],
      highlights: [
        '92% prediction accuracy',
        'Real-time inference',
        'Multi-disease detection',
        'Explainable AI'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Medical Imaging AI Assistant',
      category: 'ai',
      icon: Stethoscope,
      description: 'Deep learning solution for automated medical image analysis and anomaly detection.',
      technologies: ['Azure Custom Vision', 'Azure Container Instances', 'PyTorch', 'REST API'],
      highlights: [
        'X-ray analysis',
        'Tumor detection',
        'Automated reporting',
        'DICOM support'
      ],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Delivering enterprise-grade solutions in healthcare and AI domains
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('healthcare')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === 'healthcare'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Heart className="inline mr-2" size={16} />
                Healthcare
              </button>
              <button
                onClick={() => setFilter('ai')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === 'ai'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Brain className="inline mr-2" size={16} />
                AI Solutions
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center`}>
                  <project.icon className="text-white" size={80} />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'ai'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {project.category === 'ai' ? 'AI Solution' : 'Healthcare'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
