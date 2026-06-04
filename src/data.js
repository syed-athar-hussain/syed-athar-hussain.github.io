export const profile = {
  name: "John Doe",
  about: "I am a software engineer with 4 years of experience bridging backend infrastructure and artificial intelligence. I design distributed systems, build event-driven data pipelines, and deploy machine learning models to production. My work focuses on system reliability, low-latency inference, and eliminating architectural bottlenecks.",
  headlines: [
    "Backend Software Engineering.",
    "Machine Learning Operations.",
    "Distributed Data Systems."
  ],
  skills: [
    "Python, SQL, PostgreSQL, Java, Spring Boot",
    "PyTorch, TensorFlow, scikit-learn, Hugging Face",
    "RAG, FAISS, Multi-LLM Orchestration, LoRA",
    "Kafka, Airflow, Spark, Docker, Kubernetes, AWS"
  ]
};

export const education = [
  {
    degree: "MSc in Computer Science",
    institution: "University College Dublin",
    time: "Sep 2024 - Aug 2025",
    details: "Key Modules: Advanced Machine Learning, Generative AI, Cloud Computing, Data Visualization, Big Data, Data Science."
  },
  {
    degree: "B.Tech in Computer Science",
    institution: "St. Mary’s Technical Campus",
    time: "Aug 2015 - Jul 2019",
    details: "Key Modules: Artificial Intelligence, Computer Networks, Data Management, Algorithm Design."
  }
];

export const experience = [
  {
    role: "Assistant Application Developer",
    company: "Fujitsu Consulting India, Pune",
    time: "Feb 2022 – Aug 2024",
    desc: [
      "Developed ML systems and automated ETL processes using Kafka, Airflow, Spark, and Azure Data Factory.",
      "Implemented hybrid Transformer-LSTM models via PyTorch for real-time log return predictions.",
      "Replaced OpenAI APIs with offline deterministic PyTorch inference, achieving 0 API costs.",
      "Reduced inference latency from 500ms to under 100ms and maintained 99.9% uptime."
    ]
  },
  {
    role: "Full-Stack Developer",
    company: "Avant-Grade Technologies, Kolkata",
    time: "Mar 2019 – Sep 2021",
    desc: [
      "Developed an insurance platform using Java, Spring Boot, PostgreSQL, Kafka, and Docker Compose.",
      "Tuned PostgreSQL queries and restructured schemas, cutting database load times by 75%.",
      "Built React frontend UIs, connected to Spring APIs, and integrated ML scripts for user segmentation."
    ]
  }
];

export const projects = [
  {
    id: "ai-ecommerce-platform",
    title: "AI-Infused E-Commerce Platform",
    category: "Java Projects",
    tech: ["Java", "Spring Boot", "Kafka", "PyTorch", "gRPC", "Kubernetes"],
    summary: "Hybrid monorepo combining Java microservices, Django analytics, and Python ML/GenAI endpoints.",
    details: [
      "Architecture: Implemented Domain-Driven Design (DDD) splitting User, Product, and Order contexts into separate Spring Boot applications. Used Kafka for asynchronous event propagation and Spring Cloud OpenFeign for synchronous fallback queries.",
      "Data & Caching: Maintained logical data isolation using schema-per-service in PostgreSQL. Implemented Redis LRU caching and asynchronous Elasticsearch indexing, reducing search latency to under 200ms.",
      "AI Integration: Integrated a PyTorch/Scikit-learn hybrid recommendation engine and a GenAI customer support chatbot (fine-tuned Llama-2 7B via LoRA). Grounded the LLM using a FAISS vector database to eliminate hallucinations.",
      "Production: Bridged Java and Python stacks using gRPC for low-latency communication. Containerized all services via Docker and orchestrated with Kubernetes, separating AI GPU and backend CPU workloads using node taints and tolerations.",
      "Impact: Achieved 10k+ req/min throughput. Implemented Saga pattern for distributed transactions to ensure consistency across payment and inventory states. Reduced support ticket volume by 30% via the RAG chatbot."
    ]
  },
  {
    id: "stock-options-pipeline",
    title: "US Stock Options Data Pipeline & Forecasting",
    category: "Data Science",
    tech: ["Python", "PyTorch", "Kafka", "Airflow", "InfluxDB"],
    summary: "High-availability financial data pipeline and hybrid Transformer-LSTM forecasting model.",
    details: [
      "Ingestion & Orchestration: Managed data collection across 120 symbols utilizing a ThreadPoolExecutor. Orchestrated real-time, daily, and historical Directed Acyclic Graphs (DAGs) using Apache Airflow.",
      "Storage: Implemented polyglot persistence, routing structured relational data to Azure SQL and high-frequency time-series data to InfluxDB.",
      "Model Architecture: Developed a Transformer-LSTM hybrid in PyTorch. The LSTM handles sequential feature extraction, and the Transformer encoder maps global context across multiple stocks. Forecast horizon set to 240 minutes.",
      "Optimization: Handled large datasets efficiently using NumPy memory-mapped arrays (np.memmap) and GPU DataParallel, reducing model training time from 52 hours to under 4 hours.",
      "Impact: Processed the entire 120-symbol universe in under 3 minutes. The model achieved a directional accuracy increase to approximately >75% for batch flows."
    ]
  },
  {
    id: "error-categorization",
    title: "Error Categorization & Root-Cause Analysis",
    category: "ML Projects",
    tech: ["Python", "Django", "Hugging Face", "Pandas", "Docker"],
    summary: "Automated bug report classification replacing external APIs with local, deterministic inference.",
    details: [
      "Data Processing: Built a data layer utilizing Pandas and regex to sanitize Redmine JSON payloads fetched via the Requests library.",
      "Model Engineering: Fine-tuned a custom PyTorch BERT model (bert-base-multilingual-uncased) using Hugging Face. Configured sigmoid thresholds over BCEWithLogitsLoss to handle multi-label classification (7 point-out and 20 cause categories).",
      "System Overhaul: Replaced variable OpenAI/LangChain prompts entirely with offline deterministic PyTorch inference, eliminating network latency and token costs.",
      "Production: Wrapped the inference engine in a Django application served by Gunicorn. Secured the endpoints and containerized the system via Docker.",
      "Impact: Reduced API operational costs to zero. Processed hundreds of bilingual (Japanese/English) reports daily, standardizing root-cause visibility for engineering teams."
    ]
  },
  {
    id: "fake-audio-detection",
    title: "Fake Audio Detection",
    category: "ML Projects",
    tech: ["Python", "Librosa", "XGBoost", "SHAP"],
    summary: "Machine learning classifier to detect synthetic deepfake audio from real recordings.",
    details: [
      "Feature Extraction: Utilized Librosa to process audio streams. Extracted MFCCs (20 coefficients), deltas, chroma, RMS, and spectral features. Applied padding to handle variable-length inputs and standardized into 1D statistical vectors.",
      "Model Training: Trained a multi-class XGBoost classifier with 'multi:softprob'. Handled class imbalances using stratified train/test splits and applied StandardScaler for normalization.",
      "Interpretability: Integrated SHAP (SHapley Additive exPlanations) using TreeExplainer. Generated beeswarm and waterfall plots to map and explain feature impact distributions deterministically.",
      "Impact: Provided transparent, explainable AI classifications to differentiate between authentic voice recordings and generated outputs from models like Mars5 and MatchaTTS."
    ]
  },
  {
    id: "vle-performance-analysis",
    title: "VLE Student Performance Analysis",
    category: "Data Science",
    tech: ["Pandas", "Scikit-learn", "Plotly"],
    summary: "Analytics pipeline mapping Virtual Learning Environment logs to predictive grade classifications.",
    details: [
      "Data Engineering: Processed raw VLE activity logs. Built an Analytics Base Table (ABT) to aggregate temporal student features, including rolling averages, active days, and granular activity type counts.",
      "Machine Learning: Evaluated Support Vector Machines (SVM) and Random Forest classifiers. Addressed class imbalance using 'balanced' class weights and evaluated against weighted F1-scores.",
      "Feature Selection: Extracted Gini impurity-based feature importances from the Random Forest model. Conducted subset experimentation on the top 5 features to validate noise reduction.",
      "Impact: Identified specific system engagement metrics (e.g., total_activities, distinct_days_active) as the highest correlates to student success."
    ]
  },
  {
    id: "insurance-management",
    title: "Distributed Insurance Management System",
    category: "Java Projects",
    tech: ["Java 17", "Spring Boot 3", "PostgreSQL", "Kafka"],
    summary: "Event-driven architecture simulating a high-availability insurance platform.",
    details: [
      "Architecture: Developed three isolated Spring Boot microservices (User, Policy, Claim). Enforced strict Domain-Driven Design boundaries.",
      "Data & Messaging: Provisioned separate PostgreSQL schemas per service. Managed state changes asynchronously using Apache Kafka (Confluent) to prevent tight coupling during claim generation.",
      "Production: Orchestrated the application stack, including Zookeeper, Kafka brokers, and database instances, via Docker Compose.",
      "Impact: Ensured stateless horizontal scaling and removed single points of failure across the transaction lifecycle."
    ]
  }
];