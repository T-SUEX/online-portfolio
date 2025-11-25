import { Project, Training, Skill } from './types';

export const PORTFOLIO_OWNER = "Alex Rivera";
export const TITLE = "Biomedical Engineer";
export const BIO = "Dedicated Biomedical Engineer with a passion for bridging the gap between engineering and medicine. Specialized in medical device design, biosignal processing, and healthcare technology compliance. Committed to improving patient outcomes through innovative engineering solutions.";

export const SKILLS: Skill[] = [
  {
    category: "Engineering & Design",
    items: ["CAD (SolidWorks, Fusion 360)", "PCB Design (Altium)", "3D Printing", "Medical Device Prototyping"]
  },
  {
    category: "Software & Analysis",
    items: ["MATLAB", "Python (NumPy, SciPy)", "LabVIEW", "C++", "Image Processing"]
  },
  {
    category: "Regulatory & Clinical",
    items: ["ISO 13485", "FDA 510(k) Process", "Clinical Trial Protocols", "Risk Management (ISO 14971)"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Smart Prosthetic Limb Control",
    category: "Biomechanics",
    description: "Developed a myoelectric control system for a trans-radial prosthetic arm using surface EMG signals. Implemented machine learning algorithms to classify hand gestures in real-time.",
    image: "https://picsum.photos/800/600",
    technologies: ["Python", "TensorFlow", "Arduino", "EMG Sensors"],
    outcome: "Achieved 95% accuracy in gesture recognition with <100ms latency."
  },
  {
    id: "p2",
    title: "Portable ECG Monitor",
    category: "Medical Devices",
    description: "Designed a low-cost, portable ECG monitoring device for remote patient monitoring. Features include Bluetooth connectivity to a mobile app and real-time arrhythmia detection.",
    image: "https://picsum.photos/801/600",
    technologies: ["Altium Designer", "C++", "Bluetooth Low Energy", "Signal Processing"],
    outcome: "Prototype validated against clinical standard ECG machines with 98% correlation."
  },
  {
    id: "p3",
    title: "MRI Image Segmentation Tool",
    category: "Software",
    description: "Created a semi-automated tool for segmenting brain tumors from MRI scans. Utilized U-Net architecture to assist radiologists in volumetric analysis.",
    image: "https://picsum.photos/802/600",
    technologies: ["Python", "PyTorch", "DICOM", "React"],
    outcome: "Reduced segmentation time by 70% compared to manual methods."
  }
];

export const TRAINING: Training[] = [
  {
    id: "t1",
    title: "Medical Device Quality Management",
    institution: "Greenlight Guru Academy",
    year: "2023",
    description: "Comprehensive training on ISO 13485:2016 implementation and audit preparation."
  },
  {
    id: "t2",
    title: "Biosafety Level 2 Laboratory Training",
    institution: "University Medical Center",
    year: "2022",
    description: "Certification for handling human-derived materials and maintaining sterile environments."
  },
  {
    id: "t3",
    title: "Deep Learning for Healthcare",
    institution: "Coursera / Stanford Online",
    year: "2022",
    description: "Specialized course focused on applying AI/ML techniques to medical imaging and EHR data."
  }
];