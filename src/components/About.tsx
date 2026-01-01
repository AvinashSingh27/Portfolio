import { Award, Code, Cloud, Database, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    // {
    //   icon: Award,
    //   title: 'Microsoft Certified',
    //   description: 'AZ-204: Azure Developer Associate',
    //   color: 'from-blue-500 to-blue-600'
    // },
    {
      icon: Cloud,
      title: 'Cloud Expert',
      description: 'Azure Infrastructure & Services',
      color: 'from-sky-500 to-sky-600'
    },
    {
      icon: Code,
      title: 'DevOps Professional',
      description: 'CI/CD & Infrastructure as Code',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Database,
      title: 'AI Solutions',
      description: 'Azure Coginitive Services Deployments',
      color: 'from-violet-500 to-violet-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-6">
                  <Shield className="text-white" size={80} />
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  Microsoft Azure Professional
                </h3>
                <p className="text-blue-100 text-center text-lg">
                  AZ-204: Developing Solutions for Microsoft Azure
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                As an Azure developer/ API Integration Engineer with Microsoft Azure infrastructure
                expertise,I specialize in designing and implementing enterprise-grade cloud
                solutions that drive business value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans across cloud architecture, DevOps practices, and
                modern software development, with a proven track record of delivering
                critical healthcare and AI solutions on Azure platform.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I leverage Infrastructure as Code with Terraform, implement robust
                CI/CD pipelines, and ensure scalable, secure, and highly available
                cloud deployments.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 