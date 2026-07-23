export const profile = {
  name: "John Doe" // Replace with your actual name
};
export const education = [
  {
    degree: "MSc in Computer Science",
    institution: "University College Dublin",
    time: "Sep 2024 - Aug 2025",
    details: "Key Modules: Advanced Machine Learning, Generative AI, Cloud Computing, Data Visualization, Big Data, Data Science."
  },
  {
    degree: "BTech in Computer Science",
    institution: "St. Mary’s Technical Campus",
    time: "Aug 2015 - Jul 2019",
    details: "Key Modules: Artificial Intelligence, Computer Networks, Data Management, Algorithm Design."
  }
];

export const roleData = {
  fullstack: {
    title: "Full-Stack Software Engineering.",
    about: "Full-stack software engineer with 4 years of experience building responsive React applications and distributed Java Spring Boot services. Experienced in converting UX wireframes into maintainable UI components, managing asynchronous client state, and designing RESTful APIs backed by PostgreSQL and MySQL. Focused on secure, high-throughput systems deployed via Docker and Kubernetes.",
    skills: [
      "Frontend: React, TypeScript, HTML/CSS, Webpack, Vite, WebSockets",
      "Backend: Java 8/17, Spring Boot, JPA, Hibernate, RESTful APIs",
      "Database & DevOps: PostgreSQL, MySQL, Redis, Docker, Kubernetes, CI/CD",
      "Architecture: DDD, Event-Driven, OWASP, JWT Auth"
    ],
    experience: [
      {
        role: "Assistant Application Developer",
        company: "Fujitsu Consulting India, Pune",
        time: "Feb 2022 – Aug 2024",
        desc: [
          "Built responsive user interfaces using React and TypeScript, connected to Java/Spring Boot backend services via REST APIs.",
          "Migrated legacy monolithic Java services to an event-driven Spring Cloud distributed architecture on OpenShift, decreasing API response times from 500ms to under 100ms.",
          "Deployed CI/CD pipelines via GitLab for Kubernetes clusters, achieving zero-downtime releases and shortening the release lifecycle by 40%.",
          "Secured frontend and backend layers with strict data validation protocols to meet OWASP corporate security standards."
        ]
      },
      {
        role: "Full-Stack Developer",
        company: "Avant-Grade Technologies, Kolkata",
        time: "Mar 2019 – Sep 2021",
        desc: [
          "Built and deployed a full-stack web application from scratch using React, Webpack, and Java/J2EE.",
          "Designed RESTful web services using Core Java and Spring Boot, mapping business logic to MySQL schemas via JPA and Hibernate.",
          "Configured production monitoring, alerting, and centralized logging systems to assist in backend debugging and capacity planning."
        ]
      }
    ]
  },
  ml: {
    title: "Machine Learning Operations.",
    about: "Machine Learning Engineer focused on deploying deterministic, low-latency models to production. I specialize in PyTorch, Hugging Face, and LLM orchestration (RAG/MCP). I bridge the gap between experimental notebooks and production servers by focusing on model quantization, memory-mapped data pipelines, and eliminating third-party API dependencies.",
    skills: [
      "Python, PyTorch, Hugging Face Transformers",
      "LangGraph, LangChain, FAISS, Model Context Protocol (MCP)",
      "XGBoost, scikit-learn, SHAP, LoRA fine-tuning",
      "MLflow, AWS SageMaker, Docker, Kubernetes"
    ],
    experience: [
      {
        role: "Assistant Application Developer",
        company: "Fujitsu Consulting India, Pune",
        time: "Feb 2022 – Aug 2024",
        desc: [
          "Replaced expensive OpenAI API calls with offline, fine-tuned PyTorch BERT models, reducing monthly API inference costs to zero.",
          "Built a hybrid Transformer-LSTM architecture in PyTorch for time-series forecasting, utilizing GPU DataParallel to cut training time from 52 to 4 hours.",
          "Resolved GPU out-of-memory (OOM) errors during feature extraction by migrating the preprocessing pipeline to NumPy memory-mapped arrays (np.memmap).",
          "Managed model versioning, hyperparameter tracking, and deployment artifact generation using MLflow and AWS SageMaker."
        ]
      },
      {
        role: "Full-Stack Developer",
        company: "Avant-Grade Technologies, Kolkata",
        time: "Mar 2019 – Sep 2021",
        desc: [
          "Integrated Python-based machine learning scripts for user segmentation directly into the core Java application workflow.",
          "Automated anomaly detection pipelines using historical PostgreSQL data.",
          "Packaged machine learning dependencies inside Docker containers to eliminate environment mismatch issues across staging and production."
        ]
      }
    ]
  },
  data: {
    title: "Distributed Data Systems.",
    about: "Data Scientist and Data Engineer specializing in high-throughput ETL pipelines, statistical modeling, and data observability. I focus on processing continuous streams via Kafka and Airflow, performing Exploratory Data Analysis (EDA), handling severe class imbalances in classification tasks, and building interactive BI dashboards.",
    skills: [
      "Python, Pandas, NumPy, Scikit-Learn, Plotly",
      "Apache Airflow, Apache Spark, Kafka",
      "SQL, Azure SQL, BigQuery, InfluxDB",
      "Google Looker Studio, Tableau, A/B Testing"
    ],
    experience: [
      {
        role: "Assistant Application Developer",
        company: "Fujitsu Consulting India, Pune",
        time: "Feb 2022 – Aug 2024",
        desc: [
          "Architected real-time data ingestion pipelines for 120 streaming assets using Python ThreadPoolExecutor and Apache Kafka.",
          "Scheduled and orchestrated daily and historical data backfill Directed Acyclic Graphs (DAGs) using Apache Airflow.",
          "Calculated complex technical indicators (RSI, MACD) across millions of rows using Apache Spark.",
          "Designed polyglot persistence layers, routing relational metadata to Azure SQL and high-frequency interval data to InfluxDB."
        ]
      },
      {
        role: "Full-Stack Developer",
        company: "Avant-Grade Technologies, Kolkata",
        time: "Mar 2019 – Sep 2021",
        desc: [
          "Extracted, cleaned, and normalized production datasets using Pandas to feed into downstream analytics dashboards.",
          "Built automated SQL aggregation scripts to monitor daily capacity planning and system health.",
          "Visualized user demographics and system metrics to assist product managers in feature planning."
        ]
      }
    ]
  }
};

export const projects = [
  {
    id: "fullstack-ecommerce",
    title: "Full-Stack E-Commerce Platform",
    category: "Full Stack Projects",
    roles: ['fullstack'],
    tech: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Kubernetes"],
    summary: "High-throughput React SPA backed by DDD-structured Spring Boot microservices.",
    details: [
      "Requirements: Build a scalable full-stack platform supporting over 10,000 requests per minute with isolated data domains.",
      "Frontend Architecture: Built reusable UI components in React and TypeScript. Managed asynchronous state and complex RESTful API payloads.",
      "Backend Architecture: Implemented Domain-Driven Design (DDD) using Spring Boot. Decoupled backend services into independent bounded contexts using isolated PostgreSQL schemas.",
      "Security: Integrated Spring Security and JWT authentication at the API gateway layer to ensure data confidentiality and comply with internal security policies.",
      "Deployment: Containerized all frontend and backend services using Docker. Orchestrated the stack via Kubernetes with Horizontal Pod Autoscaling (HPA), reducing idle infrastructure costs by 30%."
    ]
  },
  {
    id: "workflow-dashboard",
    title: "Developer Workflow Dashboard",
    category: "Full Stack Projects",
    roles: ['fullstack'],
    tech: ["React", "TypeScript", "WebSockets", "Vite", "Redis"],
    summary: "Real-time SPA dashboard mapping complex system states via WebSockets.",
    details: [
      "Requirements: Build a responsive grid-layout Single Page Application (SPA) to render real-time event histories and workflow states.",
      "Implementation: Initialized the frontend using React, Vite, and TypeScript. Wrote REST APIs for task initiation and established WebSocket connections for real-time frontend status updates.",
      "Security: Secured backend webhook endpoints utilizing HMAC SHA-256 to calculate and verify request signatures, rejecting unauthorized payloads.",
      "Deployment: Maintained version control via Git. Configured a continuous deployment (CD) pipeline to automate frontend component testing and static asset deployment."
    ]
  },
  {
    id: "insurance-management-core",
    title: "Insurance Management System",
    category: "Java Projects",
    roles: ['fullstack'],
    tech: ["Core Java", "Spring Boot", "MySQL", "Kafka", "OpenFeign"],
    summary: "Microservices backend managing the end-to-end lifecycle of Users, Policies, and Claims.",
    details: [
      "Requirements: Develop a resilient backend platform for insurance operations adhering to strict financial data segregation regulations.",
      "Data Architecture: Maintained logical data segregation by building separated MySQL schemas mapped via JPA/Hibernate.",
      "Communication: Developed an inter-service validation mechanism combining synchronous HTTP calls via OpenFeign and asynchronous event streaming via Apache Kafka (configured with at-least-once semantics).",
      "Resilience: Guarded against cascading network failures by applying circuit breakers and timeout patterns to all RESTful web services.",
      "Observability: Configured full-fledged application monitoring and exposed health check endpoints using Spring Boot Actuator to facilitate backend troubleshooting."
    ]
  },
  {
    id: "agentic-github-reviewer",
    title: "Agentic Developer Workflow System",
    category: "ML Projects",
    roles: ['ml'],
    tech: ["FastAPI", "LangGraph", "Redis", "Claude 3.5 Sonnet", "FAISS"],
    summary: "Model Context Protocol (MCP) system orchestrating LLMs to automate code review via GitHub webhooks.",
    details: [
      "Requirements: Build an event-driven bot that reads GitHub pull request diffs, fetches relevant repo code chunks, and posts precise inline review suggestions without exceeding token limits.",
      "Implementation: Built a FastAPI backend implementing Anthropic's Model Context Protocol (MCP) with Redis shared memory. Created a stateful agent graph in LangGraph to route queries based on task complexity.",
      "Technical Challenges: Passing full repositories into prompt context led to hallucinations and blown token limits. Integrated a FAISS vector database to chunk and retrieve only the top 3 nearest-neighbor code files relevant to the diff. Fixed infinite tool loops in LangGraph by adding strict JSON output validation and capping maximum iteration steps.",
      "Deployment: Deployed on AWS with GitHub webhook triggers protected by HMAC SHA-256 signature verification.",
      "Metrics: Cut token consumption by 60% compared to full-context injection and posted automated review feedback within 5 seconds of PR creation."
    ]
  },
  {
    id: "stock-options-pipeline",
    title: "US Stock Options Data Pipeline & Forecasting",
    category: "Data Science",
    roles: ['data', 'ml'],
    tech: ["Python", "PyTorch", "Airflow", "Kafka", "Azure SQL"],
    summary: "High-concurrency data pipeline and Transformer-LSTM model for predicting stock log returns.",
    details: [
      "Requirements: Fetch intraday data for 120 ticker symbols, engineer technical features in real-time, and forecast log returns over a 240-minute horizon.",
      "Architecture: Wrote a data collector using a 5-worker ThreadPoolExecutor to bypass I/O bottlenecks. Orchestrated tasks via Apache Airflow DAGs. Built a PyTorch model stacking a 3-layer LSTM for sequence extraction into a 4-layer Transformer encoder for cross-symbol attention.",
      "Challenges: Generating sliding window sequences for 600 features across 120 stocks caused RAM exhaustion and process termination. Rewrote the preprocessing layer to output NumPy memory-mapped arrays (np.memmap), allowing the PyTorch DataLoader to stream sequences directly from disk. Training initially took 52 hours; implemented GPU DataParallel to reduce this to 4 hours.",
      "Deployment: Dockerized the pipeline. Implemented polyglot persistence by writing relational metadata to Azure SQL and high-frequency interval data to InfluxDB.",
      "Metrics: Achieved >75% directional accuracy on batch prediction flows. Dropped ingestion CPU utilization from 0.25 to 0.07 cores by optimizing Kafka producer batching logic."
    ]
  },
  {
    id: "error-categorization",
    title: "Error Categorization & Root-Cause Analysis",
    category: "ML Projects",
    roles: ['ml'],
    tech: ["Python", "PyTorch", "Hugging Face", "Pandas", "Django"],
    summary: "Offline, deterministic NLP pipeline replacing third-party LLM APIs for classifying bug reports.",
    details: [
      "Requirements: Automate the categorization of incoming software bug reports into 7 point-out and 20 root-cause categories without incurring recurring external API costs.",
      "Data Processing: Extracted unstructured data from Redmine APIs using the Requests library. Sanitized the text using Pandas and regex.",
      "Model Engineering: Fine-tuned the 'bert-base-multilingual-uncased' model via Hugging Face. Bug reports frequently fit into multiple categories, making standard softmax activation fail. Replaced softmax with a BCEWithLogitsLoss function and applied a 0.5 sigmoid threshold to support multi-label classification. Kept inference fast by hard-capping the tokenizer max_length to 128 tokens.",
      "Deployment: Embedded the PyTorch inference engine within a Django web application served via Gunicorn. Used Openpyxl to export results to Excel, explicitly writing code to preserve legacy VBA macros required by the client.",
      "Metrics: Eliminated OpenAI API dependencies, reducing API operational costs to zero. Processed Japanese and English text natively without translation layers."
    ]
  },
  {
    id: "fake-audio-detection",
    title: "Fake Audio Detection System",
    category: "ML Projects",
    roles: ['ml', 'data'],
    tech: ["Python", "Librosa", "XGBoost", "SHAP"],
    summary: "Acoustic classification system to detect synthetic deepfake audio from real human speech.",
    details: [
      "Requirements: Build a classifier to detect synthetic voice clips (e.g., Mars5/MatchaTTS) versus authentic human speech, and provide interpretable metrics for the decisions.",
      "Feature Extraction: Utilized Librosa to process audio streams. Extracted 170 numerical features per file, including MFCCs, deltas, chroma, RMS, and spectral features. Applied zero-padding to handle variable-length inputs before standardizing into 1D statistical vectors (mean/std).",
      "Model Engineering: Trained a multi-class XGBoost classifier configured with 'multi:softprob'. Handled inherent class imbalances using stratified train/test splits and applied StandardScaler to normalize feature weights.",
      "Interpretability: Integrated SHAP (SHapley Additive exPlanations) using TreeExplainer. Generated beeswarm and waterfall plots to map feature impact distributions. Identified that synthetic audio exhibited an identifiable, unnaturally low standard deviation in higher MFCC coefficients.",
      "Metrics: Achieved 94%+ classification accuracy on test samples, providing transparent diagnostic explanations for audio forensics."
    ]
  },
  {
    id: "vle-performance-analysis",
    title: "VLE Student Performance Analysis",
    category: "Data Science",
    roles: ['data', 'ml'],
    tech: ["Python", "Scikit-learn", "Pandas", "Plotly"],
    summary: "Analytics pipeline mapping Virtual Learning Environment logs to predictive grade classifications.",
    details: [
      "Requirements: Process raw Virtual Learning Environment (VLE) interaction logs to identify behavioral patterns and predict final student grades (Fail, Pass, Merit, Distinction).",
      "Data Engineering: Grouped and pivoted raw log timestamps into an Analytics Base Table (ABT). Engineered temporal features, including distinct active days and 7-day rolling interaction averages.",
      "Model Engineering: Evaluated Support Vector Machine (SVM) and Random Forest classifiers. The dataset had a severe class imbalance (skewed toward 'Pass'). Configured classifiers with 'balanced' class weights and shifted the evaluation metric from raw accuracy to weighted F1-score to prevent false confidence. Applied StandardScaler to normalize the 2D feature matrix for the SVM hyperplane.",
      "Analysis: Extracted Gini impurity-based feature importances from the Random Forest model. Conducted subset experimentation on the top 5 features.",
      "Metrics: Proved that dropping inputs to just the top 5 engagement metrics (e.g., total_activities) maintained Random Forest accuracy while significantly reducing computational noise."
    ]
  },
  {
    id: "healthcare-analytics-dashboard",
    title: "Healthcare Analytics BI Dashboard",
    category: "Data Science",
    roles: ['data'],
    tech: ["Google Looker Studio", "Python", "Pandas", "BigQuery"],
    summary: "Interactive operations and billing analytics dashboard for hospital metrics visualization.",
    details: [
      "Requirements: Process patient admission, demographic, medical condition, and billing records into an interactive BI dashboard for hospital administrators.",
      "Data Pipeline: Preprocessed healthcare datasets in Python/Pandas by imputing missing discharge dates, calculating Duration of Stay, and standardizing categorical columns. Loaded clean data into BigQuery for Looker Studio ingestion.",
      "Challenges: Irregular date formats and mismatched categorical values disrupted Looker Studio aggregations. Standardized strings with snake_case formatting and built calculated fields directly in Looker Studio (e.g., average bill per age bracket) to bypass frontend calculation limits.",
      "Deployment: Published an interactive Looker Studio dashboard featuring age sliders, admission type filters, blood type distribution charts, and hospital stay metrics.",
      "Metrics: Enabled clinical admins to dynamically filter and correlate medical conditions with length-of-stay metrics and billing costs across tens of thousands of records."
    ]
  }
];