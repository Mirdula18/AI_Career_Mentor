export const mockLearningPath = [
  {
    id: 'math',
    title: 'Mathematics for AI',
    description: 'Linear Algebra, Calculus, and Probability fundamentals essential for understanding algorithms.',
    estimatedHours: 40,
    status: 'completed', // completed, active, locked
    resources: [
      { type: 'Course', name: 'MIT 18.06 Linear Algebra', link: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/' },
      { type: 'Course', name: 'Khan Academy Multivariable Calculus', link: 'https://www.khanacademy.org/math/multivariable-calculus' },
      { type: 'Book', name: 'Mathematics for Machine Learning', link: 'https://mml-book.github.io/' }
    ]
  },
  {
    id: 'ml_basics',
    title: 'Machine Learning Fundamentals',
    description: 'Supervised/Unsupervised learning, SVMs, Trees, and Evaluation metrics.',
    estimatedHours: 60,
    status: 'active',
    resources: [
      { type: 'Course', name: 'Stanford Machine Learning (Andrew Ng)', link: 'https://www.coursera.org/specializations/machine-learning-introduction' },
      { type: 'Book', name: 'Hands-On ML with Scikit-Learn', link: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/' },
      { type: 'Project', name: 'Kaggle Titanic Tutorial', link: 'https://www.kaggle.com/c/titanic' }
    ]
  },
  {
    id: 'dl_intro',
    title: 'Deep Learning & Neural Networks',
    description: 'Backpropagation, PyTorch basics, CNNs, and RNNs.',
    estimatedHours: 80,
    status: 'locked',
    resources: [
      { type: 'Course', name: 'Fast.ai Practical Deep Learning', link: 'https://course.fast.ai/' },
      { type: 'Course', name: 'DeepLearning.AI Specialization', link: 'https://www.coursera.org/specializations/deep-learning' },
      { type: 'Documentation', name: 'PyTorch Official Tutorials', link: 'https://pytorch.org/tutorials/' }
    ]
  },
  {
    id: 'llms',
    title: 'Large Language Models & Transformers',
    description: 'Attention mechanisms, Transformer architecture, fine-tuning, and RAG.',
    estimatedHours: 100,
    status: 'locked',
    resources: [
      { type: 'Paper', name: 'Attention Is All You Need', link: 'https://arxiv.org/abs/1706.03762' },
      { type: 'Course', name: 'Hugging Face NLP Course', link: 'https://huggingface.co/learn/nlp-course/' },
      { type: 'Video', name: 'Let\'s build GPT (Andrej Karpathy)', link: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }
    ]
  },
  {
    id: 'mlops',
    title: 'MLOps & Deployment',
    description: 'Model serving, monitoring, CI/CD for ML, and cloud deployment pipelines.',
    estimatedHours: 50,
    status: 'locked',
    resources: [
      { type: 'Course', name: 'Made With ML - MLOps', link: 'https://madewithml.com/' },
      { type: 'Course', name: 'Full Stack Deep Learning', link: 'https://fullstackdeeplearning.com/' },
      { type: 'Documentation', name: 'BentoML Serving Guide', link: 'https://docs.bentoml.org/en/latest/' }
    ]
  }
];

export const mockJobs = [
  {
    id: 1,
    title: 'Junior Data Scientist',
    company: 'TechCorp India',
    location: 'Bangalore / Remote',
    platform: 'Naukri',
    requiredMilestone: 'ml_basics',
    salary: '₹8L - ₹12L',
    match: '85%',
    url: 'https://www.naukri.com/data-scientist-jobs'
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    company: 'Global AI Solutions',
    location: 'Remote',
    platform: 'LinkedIn',
    requiredMilestone: 'dl_intro',
    salary: '$80k - $120k',
    match: '92%',
    url: 'https://www.linkedin.com/jobs/machine-learning-engineer-jobs/'
  },
  {
    id: 3,
    title: 'AI Research Scientist',
    company: 'Innovate Labs',
    location: 'Hyderabad',
    platform: 'Naukri',
    requiredMilestone: 'llms',
    salary: '₹25L - ₹40L',
    match: '95%',
    url: 'https://www.naukri.com/ai-research-scientist-jobs'
  },
  {
    id: 4,
    title: 'Senior MLOps Engineer',
    company: 'CloudScale Inc',
    location: 'Pune',
    platform: 'LinkedIn',
    requiredMilestone: 'mlops',
    salary: '₹30L - ₹45L',
    match: '98%',
    url: 'https://www.linkedin.com/jobs/mlops-engineer-jobs/'
  },
  {
    id: 5,
    title: 'NLP Engineer (GenAI)',
    company: 'StartupX',
    location: 'Remote',
    platform: 'LinkedIn',
    requiredMilestone: 'llms',
    salary: '$100k - $150k',
    match: '90%',
    url: 'https://www.linkedin.com/jobs/nlp-engineer-jobs/'
  }
];

export const mockInterviewQuestions = [
  {
    id: 1,
    milestone: 'math',
    question: 'What is the geometric interpretation of a dot product?',
    answer: 'The dot product represents the projection of one vector onto another, scaled by the magnitude of the other vector. It measures how much two vectors point in the same direction.'
  },
  {
    id: 2,
    milestone: 'math',
    question: 'Explain the concept of eigenvectors and eigenvalues.',
    answer: 'An eigenvector is a non-zero vector that changes only by a scalar factor (the eigenvalue) when a linear transformation is applied to it. They are crucial for PCA and understanding transformations.'
  },
  {
    id: 3,
    milestone: 'ml_basics',
    question: 'What is the Bias-Variance Tradeoff?',
    answer: 'It is the conflict in trying to simultaneously minimize bias (error from erroneous assumptions, causing underfitting) and variance (error from sensitivity to small fluctuations in training data, causing overfitting).'
  },
  {
    id: 4,
    milestone: 'ml_basics',
    question: 'How does a Random Forest prevent overfitting compared to a single Decision Tree?',
    answer: 'Random Forest uses bagging (bootstrap aggregating) and random feature selection to train multiple uncorrelated trees. Averaging their predictions reduces the overall variance, mitigating overfitting.'
  },
  {
    id: 5,
    milestone: 'dl_intro',
    question: 'What is the vanishing gradient problem in deep neural networks?',
    answer: 'During backpropagation, gradients are multiplied by the derivative of activation functions (like Sigmoid/Tanh). If the network is very deep, these gradients shrink exponentially, preventing early layers from updating effectively.'
  },
  {
    id: 6,
    milestone: 'dl_intro',
    question: 'Why is ReLU often preferred over Sigmoid in deep networks?',
    answer: 'ReLU (Rectified Linear Unit) avoids the vanishing gradient problem for positive values because its derivative is always 1, allowing faster and more effective training in deep networks.'
  },
  {
    id: 7,
    milestone: 'llms',
    question: 'Explain the Self-Attention mechanism in Transformers.',
    answer: 'Self-attention allows the model to weigh the importance of different words in an input sequence relative to a specific word, enabling it to capture long-range dependencies and context regardless of position.'
  },
  {
    id: 8,
    milestone: 'llms',
    question: 'What is RAG (Retrieval-Augmented Generation)?',
    answer: 'RAG enhances LLMs by retrieving relevant facts from an external knowledge base to ground the model\'s generation, reducing hallucinations and allowing it to use up-to-date or proprietary data.'
  },
  {
    id: 9,
    milestone: 'mlops',
    question: 'What is concept drift and how do you handle it in production?',
    answer: 'Concept drift occurs when the statistical properties of the target variable change over time, degrading model performance. It is handled by monitoring distributions, retraining models, or using online learning techniques.'
  }
];

