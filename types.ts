import React from 'react';

export interface WaitlistFormData {
  companyName: string;
  email: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
}