// src/data/districts.ts
export interface DistrictInfo {
  id: string;
  name: string;
  hindiName: string;
  specialty: string;
  hub: string;
}

export const JHARKHAND_DISTRICTS: DistrictInfo[] = [
  { id: 'ranchi', name: 'Ranchi', hindiName: 'राँची', specialty: 'IT, Startups & Services', hub: 'Capital Region' },
  { id: 'east-singhbhum', name: 'East Singhbhum (Jamshedpur)', hindiName: 'पूर्वी सिंहभूम', specialty: 'Industrial Design, Fabrication & Logistics', hub: 'Kolhan' },
  { id: 'dhanbad', name: 'Dhanbad', hindiName: 'धनबाद', specialty: 'Mining Tech & Mechanical Operations', hub: 'North Chotanagpur' },
  { id: 'bokaro', name: 'Bokaro', hindiName: 'बोकारो', specialty: 'Steel & Electrical Automation', hub: 'North Chotanagpur' },
  { id: 'west-singhbhum', name: 'West Singhbhum (Chaibasa)', hindiName: 'पश्चिमी सिंहभूम', specialty: 'Tasar Silk & Minor Forest Produce', hub: 'Kolhan' },
  { id: 'khunti', name: 'Khunti', hindiName: 'खूंटी', specialty: 'Scientific Lac Cultivation & Organic Farming', hub: 'South Chotanagpur' },
  { id: 'simdega', name: 'Simdega', hindiName: 'सिमडेगा', specialty: 'Bamboo Craftsmanship & Agro-Forestry', hub: 'South Chotanagpur' },
  { id: 'gumla', name: 'Gumla', hindiName: 'गुमला', specialty: 'Millet Processing & Traditional Herbal Products', hub: 'South Chotanagpur' },
  { id: 'hazaribagh', name: 'Hazaribagh', hindiName: 'हजारीबाग', specialty: 'Sohrai & Khovar Art, Solar Energy', hub: 'North Chotanagpur' },
  { id: 'deoghar', name: 'Deoghar', hindiName: 'देवघर', specialty: 'Cultural Tourism & Service Hospitality', hub: 'Santhal Pargana' },
  { id: 'dumka', name: 'Dumka', hindiName: 'दुमका', specialty: 'Handloom, Tasar Weaving & Dairy', hub: 'Santhal Pargana' },
  { id: 'latehar', name: 'Latehar', hindiName: 'लातेहार', specialty: 'Ecotourism, Timber & Forest Produce', hub: 'Palamu' },
  { id: 'palamu', name: 'Palamu', hindiName: 'पलामू', specialty: 'Agri-Business & Water Management', hub: 'Palamu' },
  { id: 'garhwa', name: 'Garhwa', hindiName: 'गढ़वा', specialty: 'Food Processing & Rural Commerce', hub: 'Palamu' },
  { id: 'lohardaga', name: 'Lohardaga', hindiName: 'लोहरदगा', specialty: 'Bauxite Value Addition & Carpentry', hub: 'South Chotanagpur' },
  { id: 'ramgarh', name: 'Ramgarh', hindiName: 'रामगढ़', specialty: 'Heavy Equipment & Auto Components', hub: 'North Chotanagpur' },
  { id: 'giridih', name: 'Giridih', hindiName: 'गिरिडीह', specialty: 'Solar Installations & Solar Pumps', hub: 'North Chotanagpur' },
  { id: 'koderma', name: 'Koderma', hindiName: 'कोडरमा', specialty: 'Renewable Power & Logistics', hub: 'North Chotanagpur' },
  { id: 'chatra', name: 'Chatra', hindiName: 'चतरा', specialty: 'Medicinal Herbs & Organic Spices', hub: 'North Chotanagpur' },
  { id: 'godda', name: 'Godda', hindiName: 'गोड्डा', specialty: 'Thermal Power Operations & Dairy', hub: 'Santhal Pargana' },
  { id: 'sahibganj', name: 'Sahibganj', hindiName: 'साहिबगंज', specialty: 'Inland Water Transport & Stone Craft', hub: 'Santhal Pargana' },
  { id: 'pakur', name: 'Pakur', hindiName: 'पाकुड़', specialty: 'Jute Crafts & Minor Forest Produce', hub: 'Santhal Pargana' },
  { id: 'jamtara', name: 'Jamtara', hindiName: 'जामताड़ा', specialty: 'Cyber Safety, Digital Literacy & E-commerce', hub: 'Santhal Pargana' },
  { id: 'saraikela', name: 'Saraikela Kharsawan', hindiName: 'सरायकेला खरसावां', specialty: 'Automotive Spares & Tasar Silk Weaving', hub: 'Kolhan' },
];
