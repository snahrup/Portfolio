import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Steve Nahrup's projects
const PROJECT_CONTENT = [
  {
    title: 'Strainprint ML Pipeline - Cannabis Treatment Optimization',
    description:
      'Built comprehensive machine learning pipeline on Microsoft Fabric for cannabis treatment optimization, processing 1.4M+ sessions from 30K+ users. Implemented end-to-end data architecture from Power BI extraction through Bronze/Silver/Gold medallion layers to production ML models. Developed three core ML systems: Efficacy Prediction (GBT classifier achieving 87% AUC), Collaborative Filtering Recommendation System (ALS with RMSE 0.23), and Tolerance Detection Model identifying diminishing returns patterns. Pipeline automates data extraction via DAX queries, feature engineering with PySpark, and model training/deployment through MLflow. Reduced treatment recommendation time from hours to milliseconds while improving patient outcomes by 25%.',
    techStack: [
      'Microsoft Fabric',
      'Power BI',
      'PySpark',
      'MLflow',
      'Delta Lake',
      'Gradient Boosted Trees',
      'Collaborative Filtering (ALS)',
      'DAX',
      'Python',
      'Lakehouse Architecture',
      'Feature Engineering',
      'Real-time Serving',
    ],
    date: '2025',
    metrics: [
      '1.4M+ sessions processed from 36K+ strains',
      '87% AUC for efficacy prediction',
      '25% improvement in treatment outcomes',
      'Response time reduced from hours to <100ms',
      'Automated ML pipeline with daily retraining',
      '3 production ML models deployed',
    ],
    links: [
      {
        name: 'Technical Documentation',
        url: 'https://github.com/snahrup/CascadeProjects/tree/main/Strainprint_ML_Pipeline',
      },
    ],
  },
  {
    title: 'Strainprint AI Automation Platform',
    description:
      'Enterprise-scale AI automation platform unifying data, analytics, and operations for cannabis analytics leader. Implemented OpenAI/LangGraph agents with n8n orchestration for automated customer support and inventory management. Built personalized strain recommendation engine using collaborative filtering. Reduced manual processes by 40% and cycle times from days to hours.',
    techStack: [
      'OpenAI/LangGraph',
      'n8n',
      'AWS',
      'Python',
      'Row-Level Security',
      'CI/CD',
      'REST APIs',
      'Automation Workflows',
    ],
    date: '2024-2025',
    metrics: [
      '40% reduction in manual processes',
      'Cycle times reduced from days to hours',
      '90% adoption of self-service dashboards',
      'Double-digit reduction in stockouts',
    ],
  },
  {
    title: 'Maymont Homes BI Ecosystem',
    description:
      'Built unified, cloud-native BI ecosystem from the ground up for real estate company. Architected comprehensive data models and automated ETL pipelines consolidating data from diverse sources into centralized cloud data warehouse. Integrated 37 paid and open-source datasets with proprietary real-estate records to build predictive models forecasting land and home sale prices over 5, 10, and 15-year horizons.',
    techStack: [
      'Power BI',
      'Azure Data Factory',
      'Apache Airflow',
      'OneLake',
      'AWS RDS',
      'SQL Server',
      'S3',
      'Pentaho',
      'Fivetran',
      'Predictive Modeling',
    ],
    date: '2024',
    metrics: [
      '37 datasets integrated',
      'Predictive models for 5-15 year horizons',
      'Centralized data warehouse',
      'Team of 3 data engineers',
    ],
  },
  {
    title: 'Microsoft Fabric Practice at Senturus',
    description:
      'Spearheaded deployment and management of all Microsoft Fabric and Power BI infrastructure implementations. Consolidated 30+ source systems into Microsoft Fabric Lakehouse, standardizing schemas and incremental refresh to deliver single governed dataset for Finance, Sales, and Operations. Developed comprehensive data governance frameworks including tenant-level settings, workspace roles, and metadata standards.',
    techStack: [
      'Microsoft Fabric',
      'Power BI',
      'Lakehouse',
      'Data Governance',
      'Azure',
      'SQL',
      'ETL Pipelines',
      'Enterprise Architecture',
    ],
    date: '2023-2024',
    metrics: [
      '30+ source systems consolidated',
      'Single governed dataset',
      'Enterprise data governance framework',
      'Tenant-level security implementation',
    ],
  },
  {
    title: 'Microsoft Fabric MCP Server',
    description:
      'Custom Model Context Protocol server enabling Claude to interact with Microsoft Fabric and Power BI. Supports DAX query execution, dataset management, workspace operations, and notebook creation. Streamlines BI operations through conversational interface, reducing manual tasks by 60%.',
    techStack: [
      'TypeScript',
      'Node.js',
      'Microsoft Fabric API',
      'Power BI REST API',
      'MCP Protocol',
      'Claude Desktop',
      'OAuth 2.0',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/snahrup/microsoft-fabric-mcp',
      },
    ],
    metrics: [
      '60% reduction in manual BI tasks',
      'Conversational interface for BI operations',
      'Full DAX query support',
    ],
  },
  {
    title: 'Claude Context System',
    description:
      'Advanced session management system for Claude Desktop using Model Context Protocol. Integrates with Notion for persistent context storage, enabling seamless conversation continuity across sessions. Features automatic context summarization, project linking, and intelligent prompt optimization.',
    techStack: [
      'TypeScript',
      'Node.js',
      'Notion API',
      'MCP Protocol',
      'SQLite',
      'Claude Desktop',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/snahrup/claude-context-system',
      },
    ],
  },
  {
    title: 'Power BI Knowledge Base Initiative',
    description:
      'Created internal Power BI Knowledge Base at Inspire11 that reduced new developer onboarding time from 2 weeks to 3 days. Included 20+ template designs for 10 separate industries, 20+ light & dark themes, and custom downloadable external tools for Power BI Desktop.',
    techStack: [
      'Power BI',
      'DAX',
      'Power Query',
      'Documentation',
      'Template Design',
      'Training Materials',
    ],
    date: '2021-2023',
    metrics: [
      'Onboarding reduced from 2 weeks to 3 days',
      '20+ industry templates',
      '20+ custom themes',
      'Custom external tools',
    ],
  },
];

export const data = PROJECT_CONTENT.map((project, index) => ({
  category: project.techStack[0],
  title: project.title,
  src: `/project-${index + 1}.png`,
  content: (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{project.date}</p>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      {project.metrics && (
        <div>
          <h4 className="font-semibold mb-2">Key Achievements</h4>
          <ul className="space-y-1">
            {project.metrics.map((metric, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start">
                <ChevronRight className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                {metric}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h4 className="font-semibold mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-accent text-accent-foreground rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.links && (
        <div className="flex gap-4 pt-4">
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
            >
              {link.name}
              <ChevronRight className="h-3 w-3" />
            </a>
          ))}
        </div>
      )}
    </div>
  ),
}));