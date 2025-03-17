import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitHub, Linkedin, Mail, Image } from "lucide-react";
import stockPredictionImage from "@/assets/stock_prediction.jpg";
import churnPredictionImage from "@/assets/churn_prediction.jpg";

const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Developed an AI-driven model using XGBoost to predict customer churn in banking/telecom, reducing churn by 18%.",
    techStack: "Python, SQL, XGBoost, Tableau",
    image: churnPredictionImage,
  },
  {
    title: "Predictive Maintenance for Industrial Machines",
    description: "Implemented LSTM and ARIMA models to predict failures, reducing machine downtime by 20%.",
    techStack: "LSTM, ARIMA, TensorFlow, Power BI",
  },
  {
    title: "Fraud Detection in Financial Transactions",
    description: "Used Isolation Forest and AutoEncoder to detect anomalies, reducing fraudulent transactions by 25%.",
    techStack: "Python, AI-driven anomaly detection",
  },
  {
    title: "Stock Price Prediction Using AI",
    description: "Applied LSTM and ARIMA models to forecast stock prices with 90% accuracy, assisting investors in decision-making.",
    techStack: "LSTM, ARIMA, Prophet, Python",
    image: stockPredictionImage,
  },
  {
    title: "Credit Risk Scoring Model",
    description: "Built an XGBoost-based model to assess loan default risk, improving approval accuracy by 15%.",
    techStack: "XGBoost, Logistic Regression, Tableau",
  },
];

export default function Portfolio() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Karishmaa Fernandes - Data Scientist</h1>
      <p className="text-lg mb-6 text-center">15+ years in Data Science, Analytics, and Machine Learning | Based in London</p>
      
      <h2 className="text-2xl font-semibold mb-4 text-center">About Me</h2>
      <p className="mb-6 text-center">I am a results-driven Data Scientist with extensive experience in predictive modeling, machine learning, and data-driven decision-making. Passionate about solving real-world problems using AI and analytics, I have worked across industries, including finance, industrial automation, and telecom.</p>
      
      <h2 className="text-2xl font-semibold mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="p-4 shadow-md">
            <CardContent>
              {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />}
              <h3 className="text-xl font-semibold text-center">{project.title}</h3>
              <p className="mt-2 text-center">{project.description}</p>
              <p className="mt-2 text-sm text-gray-600 text-center">Tech Stack: {project.techStack}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <h2 className="text-2xl font-semibold mt-8 text-center">Contact</h2>
      <div className="flex justify-center gap-4 mt-4">
        <Button variant="outline" asChild>
          <a href="https://github.com/KarishmaFernandes" target="_blank" rel="noopener noreferrer">
            <GitHub className="mr-2" /> GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://www.linkedin.com/in/karishmaa-fernandes-6b476021/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2" /> LinkedIn
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="mailto:ferkaris@gmail.com">
            <Mail className="mr-2" /> Email
          </a>
        </Button>
      </div>
    </div>
  );
}
