'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Cloud, Users, Brain } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Business Intelligence & Analytics',
      icon: <Database className="h-5 w-5" />,
      skills: [
        'Power BI',
        'Microsoft Fabric',
        'OneLake',
        'Synapse Analytics',
        'Data Factory',
        'PySpark Notebooks',
        'Semantic Models',
        'DAX',
        'Direct Lake',
        'Row-Level Security',
        'CI/CD for BI',
        'Tableau',
      ],
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
    {
      category: 'Data Engineering & ETL',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'Azure Data Factory',
        'Apache Airflow',
        'dbt',
        'Fivetran',
        'Pentaho',
        'ETL/ELT Pipelines',
        'Data Warehousing',
        'AWS RDS',
        'S3',
        'SQL Server',
        'PostgreSQL',
        'Snowflake',
      ],
      color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    },    {
      category: 'AI & Machine Learning',
      icon: <Brain className="h-5 w-5" />,
      skills: [
        'OpenAI/GPT',
        'LangChain',
        'LangGraph',
        'Pinecone',
        'Vector Databases',
        'RAG Implementation',
        'Predictive Modeling',
        'ML Forecasting',
        'n8n Automation',
        'GitHub Actions',
        'Agent Frameworks',
        'Hugging Face',
      ],
      color: 'bg-purple-50 text-purple-600 border border-purple-200',
    },
    {
      category: 'Programming & Development',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'Python',
        'TypeScript',
        'JavaScript',
        'SQL',
        'DAX',
        'Git',
        'GitHub',
        'Docker',
        'REST APIs',
        'PySpark',
        'C',
        'C++',
      ],
      color: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
    },
    {
      category: 'Cloud & Enterprise Systems',
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        'Microsoft Azure',
        'AWS',
        'GCP',
        'SAP',
        'NetSuite',
        'Databricks',
        'SharePoint',
        'Microsoft 365',
        'Kubernetes',
        'CI/CD Pipelines',
      ],
      color: 'bg-amber-50 text-amber-600 border border-amber-200',
    },
    {
      category: 'Leadership & Soft Skills',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'Team Leadership (8-15 members)',
        'Strategic Planning',
        'Cross-functional Collaboration',
        'Data Governance',
        'Architecture Design',
        'Stakeholder Management',
        'Mentoring',
        'Problem-Solving',
        'Client Relations',
        'Project Management',
      ],
      color: 'bg-rose-50 text-rose-600 border border-rose-200',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, skillIndex) => (
                    <motion.div key={skillIndex} variants={badgeVariants}>
                      <Badge
                        className={`rounded-full px-3 py-1 ${section.color}`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;