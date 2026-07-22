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
  backend: {
    title: "Backend / Java Engineer.",
    about: "Software Engineer specializing in distributed systems, event-driven architectures, and high-throughput microservices. I focus on Java, Spring Boot, and Apache Kafka. My production work centers on strict domain isolation, database query optimization, reducing IPC latency via gRPC, and removing single points of failure in cloud-native environments.",
    skills: [
      "Java 8/17/21, Spring Boot 3, Hibernate/JPA",
      "PostgreSQL, Apache Cassandra, Redis",
      "Apache Kafka, gRPC, REST, Protocol Buffers",
      "Docker, Kubernetes, GitHub Actions, Prometheus"
    ],
    experience: [
      {
        role: "Assistant Application Developer",
        company: "Fujitsu Consulting India, Pune",
        time: "Feb 2022 – Aug 2024",
        desc: [
          "Decomposed monolithic applications into isolated microservices using Spring Boot and Domain-Driven Design principles.",
          "Implemented asynchronous event architectures using Apache Kafka with acks=all to ensure zero message loss between services.",
          "Optimized slow database transactions by rewriting JPA queries and introducing Redis LRU caching, dropping average p95 response times from 500ms to under 100ms.",
          "Containerized services via Docker and managed CI/CD deployment pipelines on OpenShift/Kubernetes clusters."
        ]
      },
      {
        role: "Full-Stack Developer",
        company: "Avant-Grade Technologies, Kolkata",
        time: "Mar 2019 – Sep 2021",
        desc: [
          "Built RESTful APIs in Java Spring Boot for an enterprise insurance platform.",
          "Enforced logical data isolation by provisioning separate PostgreSQL schemas for distinct domain contexts.",
          "Diagnosed and resolved database deadlocks by adding missing composite indexes, reducing query execution times by 75%.",
          "Conducted daily code reviews focusing on concurrency issues and memory leaks."
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
    id: "ai-ecommerce-platform",
    title: "AI-Infused E-Commerce Platform",
    category: "Java Projects",
    roles: ['backend', 'ml'],
    tech: ["Java", "Spring Boot", "Kafka", "PyTorch", "gRPC", "Kubernetes"],
    summary: "Hybrid monorepo combining Java microservices, Django analytics, and Python ML/GenAI endpoints.",
    details: [
      "Requirements: Decompose a monolithic e-commerce backend into isolated domains. Integrate Python-based machine learning recommendations and an LLM support chatbot without impacting core transaction latency.",
      "Architecture: Implemented Domain-Driven Design (DDD) to isolate User, Product, and Order contexts into separate Spring Boot 3 applications. Used PostgreSQL with a strict schema-per-service rule. Implemented a PyTorch neural collaborative filtering model and a RAG-based Llama-2 chatbot.",
      "Challenges: Initial cross-stack communication over HTTP/REST caused 500ms latency spikes during JMeter load testing. Replaced the REST layer between Java and Python with gRPC and Protocol Buffers, cutting latency by 5x. Distributed transactions failed during partition testing; implemented a Saga pattern orchestrator in the Order service to handle multi-step rollbacks.",
      "Deployment: Containerized all services. Managed orchestration with Kubernetes, setting node taints to isolate GPU workloads (AI inference) from CPU workloads (backend API routing).",
      "Metrics: The system handled 10,000 req/min in simulations. The recommendation engine correlated with a 20% increase in cart additions in A/B testing."
    ]
  },
  {
    id: "agentic-github-reviewer",
    title: "Agentic Developer Workflow System",
    category: "ML Projects",
    roles: ['backend', 'ml'],
    tech: ["FastAPI", "LangGraph", "Redis", "Claude 3.5 Sonnet", "FAISS"],
    summary: "Model Context Protocol (MCP) system orchestrating LLMs to automate code review via GitHub webhooks.",
    details: [
      "Requirements: Build a webhook-triggered system to read GitHub Pull Request diffs, fetch relevant repository context, and post inline syntax corrections without exceeding LLM token limits.",
      "Architecture: Built a FastAPI backend acting as an MCP server, using Redis for shared memory across agent steps. Used LangGraph to define a cyclic state machine for query routing. Bound GitHub API utility functions to Claude 3.5 Sonnet using LangChain tool decorators.",
      "Challenges: Injecting full repository structures into the LLM prompt caused 'lost-in-the-middle' hallucinations and high token costs. Solved this by building a FAISS vector database pipeline; the system chunks repo files and retrieves only the top 3 mathematical nearest-neighbor code blocks based on the PR diff. LangGraph agents initially entered infinite tool-calling loops; resolved by enforcing strict JSON schema validation on tool outputs and hard-capping execution edges.",
      "Security & Deployment: Configured event-driven triggers via GitHub Webhooks. Dropped unauthorized network requests by hashing payloads and comparing them against the X-Hub-Signature-256 header.",
      "Metrics: Decreased API token consumption by 60% compared to full-context loading. Automated review feedback posts within 5 seconds of PR creation."
    ]
  },
  {
    id: "stock-options-pipeline",
    title: "US Stock Options Data Pipeline & Forecasting",
    category: "Data Science",
    roles: ['data', 'ml', 'backend'],
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
    roles: ['ml', 'backend'],
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
    id: "insurance-management",
    title: "Distributed Insurance Management System",
    category: "Java Projects",
    roles: ['backend'],
    tech: ["Java 17", "Spring Boot 3", "PostgreSQL", "Kafka"],
    summary: "Stateless microservices architecture handling policy and claim lifecycles.",
    details: [
      "Requirements: Design a highly available backend to process user registration, policy generation, and insurance claims while maintaining strict data compliance.",
      "Architecture: Built three distinct Spring Boot microservices (User, Policy, Claim). Handled immediate read queries via synchronous Feign clients and distributed state changes via asynchronous Kafka event publishing.",
      "Challenges: Financial regulatory requirements mandated strict data isolation. Configured Hibernate to enforce separate PostgreSQL schemas for each microservice, blocking cross-domain database queries at the ORM level. To prevent data corruption during network partitions, configured Kafka producer acks=all and implemented consumer idempotency.",
      "Deployment: Defined a docker-compose.yml to orchestrate the application JARs alongside Zookeeper, Kafka brokers, and the PostgreSQL instance. Exposed Spring Boot Actuator endpoints for Prometheus metric scraping.",
      "Metrics: Ensured 100% logical data isolation, allowing individual domains (e.g., Claims) to scale horizontally under load without locking Policy tables."
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
    id: "user-management-cassandra",
    title: "High-Throughput User Management Service",
    category: "Java Projects",
    roles: ['backend'],
    tech: ["Java", "Spring Boot", "Cassandra", "Redis", "Kafka"],
    summary: "Low-latency REST microservice using Cassandra for persistent storage and Redis for caching.",
    details: [
      "Requirements: Develop a high-throughput user activity logging and management service capable of single-digit millisecond lookup times.",
      "Architecture: Built a Spring Boot application using Spring Data Cassandra for wide-column persistence and Lettuce for Redis caching. Published structured user activity payloads to Kafka topics using a custom producer.",
      "Challenges: High read volume caused unnecessary database loads and latency. Implemented a cache-aside pattern in Redis with a 3-minute TTL, falling back to Cassandra only on cache misses. Integrated Logback rolling file appenders with strict size-based policies to prevent local disk exhaustion during high-volume auditing.",
      "Deployment: Containerized the stack with Docker Compose and documented REST endpoints using OpenAPI (Swagger UI).",
      "Metrics: Reduced user profile lookup latency to <10ms for cached records while continuously streaming audit events to Kafka."
    ]
  },
  {
    id: "carracing-ppo-rl",
    title: "Autonomous Car Control via PPO",
    category: "ML Projects",
    roles: ['ml'],
    tech: ["Python", "PyTorch", "Stable-Baselines3", "OpenAI Gym"],
    summary: "Vision-based continuous control autonomous racing agent trained via Proximal Policy Optimization (PPO).",
    details: [
      "Requirements: Train an RL agent to navigate a simulated racing track in OpenAI Gym (CarRacing-v3) directly from raw visual pixel observations.",
      "Implementation: Used Stable-Baselines3 PPO with a Convolutional Neural Network (CNN) policy. Reduced raw RGB frames to 84x84 grayscale.",
      "Challenges: Single-frame inputs suffered from severe partial observability (unable to determine car velocity or heading). Implemented VecFrameStack to concatenate 4 consecutive frames, providing implicit motion cues and stabilizing policy learning. Tuned hyperparameters (learning rate 3e-5, clip range 0.4, entropy coefficient 0.001) to prevent early policy collapse.",
      "Deployment: Saved model checkpoints during 500,000 timestep training runs using EvalCallback and monitored actor/critic losses in TensorBoard.",
      "Metrics: The 4-frame stacked PPO agent improved average evaluation episode reward from -61.56 (single-frame failure) to +154.19."
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
  },
  {
    id: "dublin-rental-market-analysis",
    title: "Dublin Rental Market Scraper & EDA",
    category: "Data Science",
    roles: ['data'],
    tech: ["Python", "BeautifulSoup", "Pandas", "Plotly", "Seaborn"],
    summary: "Web scraper and exploratory data analysis pipeline evaluating housing prices across geographic districts.",
    details: [
      "Requirements: Scrape multi-page rental database listings across 4 quarterly archives, clean messy HTML table structures, and analyze rental pricing distributions.",
      "Implementation: Wrote a BeautifulSoup scraper handling pagination logic, retry blocks, and field extraction mappings. Standardized pricing into numeric floats using regular expressions.",
      "Challenges: Pagination HTML on quarter homepages contained duplicate page links and skipped initial page links. Fixed by parsing relative hrefs, dropping duplicates, and explicitly injecting initial page URLs. Handled missing <td> tags gracefully using try-except blocks to prevent scraper termination.",
      "Analysis: Output structured datasets to CSV. Categorized locations into North vs. South Dublin based on postal district numbers. Generated EDA plots using Plotly Express and Seaborn (histograms with KDE, location price boxplots).",
      "Metrics: Cleaned and structured 1,000+ raw HTML rental listings, revealing price clustering between €1,250–€1,750 and highlighting property type cost variances."
    ]
  }
];