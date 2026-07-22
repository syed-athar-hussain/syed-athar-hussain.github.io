export const profile = {
  name: "Syed Athar Hussain",
  about: "Software Engineer with 4 years of experience building Java microservices, event-driven data pipelines, and machine learning models. Work focuses on backend architecture, query optimization, low-latency model inference, and MLOps pipeline automation.",
  headlines: [
    "Backend & Distributed Systems Engineer.",
    "Machine Learning & MLOps Specialist.",
    "Data Engineer & Applied Data Scientist."
  ],
  skills: [
    "Java, Spring Boot, Python, SQL, PostgreSQL, Cassandra",
    "PyTorch, TensorFlow, scikit-learn, Hugging Face, XGBoost, LangChain, LangGraph, FAISS",
    "Apache Kafka, Airflow, Spark, Redis, Elasticsearch, gRPC",
    "Docker, Kubernetes, AWS (EKS/SageMaker), Azure, OpenShift, MLflow, Prometheus, Grafana"
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
    degree: "BTech in Computer Science",
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
      "Built microservices and automated data pipelines using Java, Spring Boot, Kafka, PyTorch, Airflow, and Spark.",
      "Trained and deployed a hybrid Transformer-LSTM model to forecast stock log returns, achieving over 75% directional accuracy on batch flows.",
      "Replaced external OpenAI API prompts with a fine-tuned offline BERT model, dropping monthly API costs to zero and processing bilingual ticket reports locally.",
      "Optimized database queries and introduced Redis caching, cutting average backend latency from 500ms to under 100ms.",
      "Containerized services with Docker and set up deployment pipelines on Kubernetes/OpenShift with MLflow tracking and Prometheus alerting."
    ]
  },
  {
    role: "Full-Stack Developer",
    company: "Avant-Grade Technologies, Kolkata",
    time: "Mar 2019 – Sep 2021",
    desc: [
      "Engineered backend microservices in Java Spring Boot and relational schemas in PostgreSQL for an enterprise insurance application.",
      "Implemented asynchronous event publishing using Apache Kafka to decouple user registration, policy generation, and claims processing.",
      "Restructured PostgreSQL tables and tuned SQL query indexes, reducing heavy query execution times by 75%.",
      "Built React frontend views and integrated Python machine learning scripts for user behavior segmentation."
    ]
  }
];

export const projects = [
  {
    id: "ai-ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Java Projects",
    tech: ["Java 21", "Spring Boot 3", "Apache Kafka", "PyTorch", "gRPC", "Kubernetes"],
    summary: "Distributed e-commerce system with DDD microservices, gRPC cross-stack IPC, and an embedded RAG support bot.",
    details: [
      "Requirements: Break down a monolithic e-commerce application into isolated domain microservices while integrating a Python ML recommendation pipeline and support chatbot.",
      "Implementation: Built bounded contexts (User, Product, Order) in Spring Boot 3 using PostgreSQL schema-per-service isolation. Added a neural collaborative filtering recommendation model in PyTorch and a fine-tuned Llama-2 7B chatbot grounded via FAISS.",
      "Technical Challenges: Inter-service REST calls between Java and Python introduced 500ms latency spikes under load; replaced HTTP with gRPC and Protocol Buffers, cutting cross-stack communication time by 5x. Solved distributed transaction failures across Order and Inventory by implementing an orchestrated Saga pattern in Spring Boot.",
      "Deployment: Dockerized services and orchestrated on Kubernetes (EKS). Separated CPU-bound backend pods from GPU-bound ML inference pods using node taints and tolerations.",
      "Impact: Handled 10,000 req/min in load tests with 99.9% uptime. The personalized recommendation layer increased cart additions by 20% in simulated evaluation runs."
    ]
  },
  {
    id: "agentic-github-reviewer",
    title: "Developer Workflow System",
    category: "ML Projects",
    tech: ["FastAPI", "LangGraph", "Redis", "Claude 3.5 Sonnet", "FAISS"],
    summary: "Agentic workflow system using Model Context Protocol (MCP) to automate context-aware code reviews via GitHub webhooks.",
    details: [
      "Requirements: Build an event-driven bot that reads GitHub pull request diffs, fetches relevant repo code chunks, and posts precise inline review suggestions without exceeding token limits.",
      "Implementation: Built a FastAPI backend implementing Anthropic's Model Context Protocol (MCP) with Redis shared memory. Created a stateful agent graph in LangGraph to route queries based on task complexity.",
      "Technical Challenges: Passing full repositories into prompt context led to hallucinations and blown token limits. Integrated a FAISS vector database to chunk and retrieve only the top 3 nearest-neighbor code files relevant to the diff. Fixed infinite tool loops in LangGraph by adding strict JSON output validation and capping maximum iteration steps.",
      "Deployment: Deployed on AWS with GitHub webhook triggers protected by HMAC SHA-256 signature verification.",
      "Impact: Cut token consumption by 60% compared to full-context injection and posted automated review feedback within 5 seconds of PR creation."
    ]
  },
  {
    id: "stock-options-pipeline",
    title: "US Stock Options Data Pipeline & Forecasting",
    category: "Data Science",
    tech: ["Python", "PyTorch", "Apache Airflow", "Kafka", "InfluxDB"],
    summary: "High-throughput financial ETL pipeline and hybrid Transformer-LSTM model predicting stock option log returns.",
    details: [
      "Requirements: Ingest market data for 120 stock symbols every minute, calculate technical indicators (RSI, MACD, Bollinger Bands), and predict 240-minute forward log returns.",
      "Implementation: Wrote a multi-threaded data collector using Python ThreadPoolExecutor and Apache Airflow DAGs. Constructed a PyTorch model pairing a 3-layer LSTM for sequential feature extraction with a 4-layer Transformer encoder for multi-asset cross-attention.",
      "Technical Challenges: Preprocessing 600 features across historical windows caused RAM out-of-memory crashes. Converted the preprocessing pipeline to stream dataset slices via NumPy memory-mapped arrays (np.memmap). Accelerated model training time from 52 hours down to 4 hours using PyTorch DataParallel across GPUs.",
      "Deployment: Deployed containerized Airflow workers and polyglot databases (Azure SQL for relational metadata, InfluxDB for time-series intervals).",
      "Impact: Processed the entire 120-symbol universe in under 3 minutes per cycle, achieving over 75% directional prediction accuracy for batch streams."
    ]
  },
  {
    id: "error-categorization",
    title: "Error Categorization & Root-Cause Analysis",
    category: "ML Projects",
    tech: ["Python", "PyTorch", "Hugging Face", "Django", "Docker"],
    summary: "Offline multi-label NLP pipeline using fine-tuned BERT to classify software bug reports and identify root causes.",
    details: [
      "Requirements: Categorize bug reports into 7 issue feedback tags and 20 root-cause categories across English and Japanese without incurring third-party API costs.",
      "Implementation: Extracted ticket data from Redmine APIs using Requests and Pandas. Fine-tuned a bert-base-multilingual-uncased model using Hugging Face Transformers and PyTorch.",
      "Technical Challenges: Reports required multi-label classification rather than single-label prediction. Replaced standard Softmax with BCEWithLogitsLoss and evaluated probabilities against a 0.5 Sigmoid threshold. Capped token length at 128 to ensure low latency.",
      "Deployment: Wrapped the model in a Django REST backend running on Gunicorn inside Docker containers. Built custom Openpyxl output handlers that updated classification columns while preserving existing VBA macros in Excel templates.",
      "Impact: Completely eliminated external LLM API fees. Reduced manual ticket triage time by over 50% for cross-border development teams."
    ]
  },
  {
    id: "fake-audio-detection",
    title: "Fake Audio Detection System",
    category: "ML Projects",
    tech: ["Python", "Librosa", "XGBoost", "SHAP", "Scikit-Learn"],
    summary: "Deepfake voice audio detection system using acoustic feature extraction, XGBoost classification, and SHAP explainability.",
    details: [
      "Requirements: Detect synthetic voice clips (e.g., generated by TTS models like Mars5/MatchaTTS) versus authentic human speech with interpretable feature metrics.",
      "Implementation: Extracted 170 numerical features per audio file using Librosa (MFCCs, delta MFCCs, Chroma STFT, Spectral Centroid, RMS, Zero-Crossing Rate). Trained a multi-class XGBoost classifier (multi:softprob) with stratified splits.",
      "Technical Challenges: Unbalanced clip lengths created feature array dimension mismatches. Resolved by enforcing standard 0.5s padding/trimming prior to calculating feature mean and standard deviation vectors. Used SHAP TreeExplainer to produce waterfall and beeswarm plots, diagnosing why synthetic audio exhibited unnaturally low standard deviation in MFCC higher coefficients.",
      "Deployment: Serialized models and scalers with Joblib. Generated static and interactive local evaluation dashboards showing class confidence scores.",
      "Impact: Delivered 94%+ classification accuracy on test audio samples with clear, visual diagnostic explanations for audio forensics."
    ]
  },
  {
    id: "insurance-management",
    title: "Insurance Management System",
    category: "Java Projects",
    tech: ["Java 17", "Spring Boot 3", "PostgreSQL", "Apache Kafka", "Docker"],
    summary: "Microservices platform with domain-isolated data stores and event-driven claim handling workflows.",
    details: [
      "Requirements: Build a resilient insurance platform supporting user registration, policy creation, and claim processing under strict data compliance rules.",
      "Implementation: Engineered User, Policy, and Claim microservices using Spring Boot 3 and Java 17. Handled inter-service synchronous communication with Spring Cloud OpenFeign and asynchronous event publication via KafkaTemplate.",
      "Technical Challenges: Regulatory compliance demanded strict domain isolation. Configured individual PostgreSQL database schemas (user_schema, policy_schema, claim_schema) with no cross-domain SQL joins allowed. Handled transient network errors by tuning Feign timeouts, retries, and Kafka producer acknowledgment settings (acks=all).",
      "Deployment: Orchestrated Java JARs, PostgreSQL, Zookeeper, and Kafka containers via Docker Compose. Added Spring Boot Actuator for Prometheus health scraping.",
      "Impact: Delivered a stateless, horizontally scalable system capable of executing policy and claim state changes with zero data pollution across domains."
    ]
  },
  {
    id: "user-management-cassandra-redis",
    title: "User Management Service",
    category: "Java Projects",
    tech: ["Java 8", "Spring Boot", "Apache Cassandra", "Redis", "Apache Kafka"],
    summary: "Low-latency REST microservice using Cassandra for persistent storage and Redis for fast caching.",
    details: [
      "Requirements: Develop a high-throughput user activity logging and management service capable of rapid lookup times.",
      "Implementation: Built a Spring Boot application using Spring Data Cassandra for persistence and Lettuce for Redis caching. Published user activity payloads to Kafka topics using a custom producer.",
      "Technical Challenges: High read volume caused unnecessary database loads. Implemented a cache-aside pattern in Redis with a 3-minute TTL, falling back to Cassandra only on cache misses. Integrated Logback rolling file appenders with size-based policies for structured system auditing.",
      "Deployment: Containerized the stack with Docker Compose and documented endpoints using OpenAPI (Swagger UI).",
      "Impact: Reduced user profile lookup latency to single-digit milliseconds for cached records while continuously logging audit events to Kafka."
    ]
  },
  {
    id: "carracing-ppo-rl",
    title: "Autonomous Car Control via PPO",
    category: "ML Projects",
    tech: ["Python", "PyTorch", "Stable-Baselines3", "OpenAI Gym", "CNN"],
    summary: "Vision-based continuous control autonomous racing agent trained via Proximal Policy Optimization (PPO).",
    details: [
      "Requirements: Train a neural network agent to navigate a simulated racing track in OpenAI Gym (CarRacing-v3) directly from visual pixel observations.",
      "Implementation: Used Stable-Baselines3 PPO with a Convolutional Neural Network (CNN) policy. Reduced raw RGB frames to 84x84 grayscale. Compared a single-frame observation baseline against a 4-frame temporal stack using VecFrameStack.",
      "Technical Challenges: Single-frame inputs suffered from partial observability (unable to determine car velocity or heading). Frame stacking provided implicit motion cues, improving policy stability. Tuned hyperparameters (learning rate 3e-5, clip range 0.4, entropy coefficient 0.001, and State-Dependent Exploration use_sde=True) to prevent early policy collapse.",
      "Deployment: Saved best model checkpoints during 500,000 timestep training runs using EvalCallback and monitored losses in TensorBoard.",
      "Impact: The 4-frame stacked PPO agent improved average evaluation episode reward from -61.56 (single-frame failure) to +154.19."
    ]
  },
  {
    id: "vle-performance-analysis",
    title: "VLE Student Performance Analysis",
    category: "Data Science",
    tech: ["Python", "Pandas", "Scikit-Learn", "Plotly", "Seaborn"],
    summary: "Machine learning and EDA pipeline classifying Virtual Learning Environment (VLE) student engagement to predict academic outcomes.",
    details: [
      "Requirements: Clean raw VLE web server logs, construct student-level feature tables, and train classification models to predict final grade bands (Fail, Pass, Merit, Distinction).",
      "Implementation: Transformed raw timestamps into active day metrics and rolling activity averages. Merged activity breakdowns into a consolidated Analytics Base Table (ABT). Trained SVM and Random Forest models.",
      "Technical Challenges: High class imbalance skewed predictions toward 'Pass'. Handled by configuring class_weight='balanced' and evaluating models using weighted F1-score rather than raw accuracy. Applied StandardScaler to remove scale bias for SVM hyperplanes.",
      "Deployment: Built interactive Plotly visualizations (activity heatmaps, rolling trend lines, confusion matrices) for exploratory analysis.",
      "Impact: Isolated top engagement predictors using Random Forest Gini importances. Proved that reducing the feature set to the top 5 activity metrics maintained classifier accuracy while cutting feature extraction overhead."
    ]
  },
  {
    id: "healthcare-analytics-dashboard",
    title: "Healthcare Analytics BI Dashboard",
    category: "Data Science",
    tech: ["Google Looker Studio", "Python", "Pandas", "BigQuery"],
    summary: "Interactive healthcare operations and billing analytics dashboard for hospital metrics visualization.",
    details: [
      "Requirements: Process patient admission, demographic, medical condition, and billing records into an interactive BI dashboard for hospital administrators.",
      "Implementation: Preprocessed healthcare datasets in Python/Pandas by imputing missing discharge dates, calculating Duration of Stay, and standardizing categorical columns. Loaded clean data into BigQuery/Google Sheets for Looker Studio ingestion.",
      "Technical Challenges: Irregular date formats and mismatched categorical values disrupted Looker Studio aggregations. Standardized strings with snake_case formatting and built calculated fields directly in Looker Studio (e.g., average bill per age bracket).",
      "Deployment: Published an interactive Looker Studio dashboard featuring age sliders, admission type filters, blood type distribution charts, and hospital stay metrics.",
      "Impact: Enabled clinical admins to dynamically identify billing trends by insurance provider and correlate medical conditions with length-of-stay metrics."
    ]
  },
  {
    id: "dublin-rental-market-analysis",
    title: "Dublin Rental Market Scraper & EDA",
    category: "Data Science",
    tech: ["Python", "BeautifulSoup", "Pandas", "Plotly", "Seaborn"],
    summary: "Web scraper and exploratory data analysis pipeline evaluating Dublin rental housing prices across geographic postal districts.",
    details: [
      "Requirements: Scrape multi-page rental database listings across 4 quarterly archives, clean messy HTML table structures, and analyze rental pricing distributions.",
      "Implementation: Wrote a BeautifulSoup scraper handling pagination logic, retry blocks, and field extraction mappings (bedrooms, price, location, property type). Standardized pricing into numeric floats using regular expressions.",
      "Technical Challenges: Pagination HTML on quarter homepages contained duplicate page links and skipped page 1 links. Fixed by parsing relative hrefs, dropping duplicates, and explicitly injecting initial page URLs. Categorized locations into North vs. South Dublin based on postal district numbers.",
      "Deployment: Output structured datasets to CSV and generated EDA plots using Plotly Express and Seaborn (histograms with KDE, location price boxplots, property type subplots).",
      "Impact: Cleaned and structured 1,000+ rental listings, revealing price clustering between €1,250–€1,750 and highlighting property type cost variances."
    ]
  }
];