'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  title: string;
  category: string;
  description: string;
  location: string;
  address: string;
  urgency: string;
  budget: string;
  preferredDate: string;
  preferredTime: string;
  name: string;
  phone: string;
  email: string;
  images: File[];
}

export default function PostProblem() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    category: '',
    description: '',
    location: '',
    address: '',
    urgency: '',
    budget: '',
    preferredDate: '',
    preferredTime: '',
    name: '',
    phone: '',
    email: '',
    images: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pageStyles: React.CSSProperties = {
    paddingTop: '100px',
    paddingBottom: '80px',
    backgroundColor: '#F8F9FA',
    minHeight: '100vh',
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const headerStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const titleStyles: React.CSSProperties = {
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: '15px',
  };

  const subtitleStyles: React.CSSProperties = {
    fontSize: '18px',
    color: '#5A6C7D',
  };

  const formStyles: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
  };

  const sectionStyles: React.CSSProperties = {
    marginBottom: '30px',
  };

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const iconStyles: React.CSSProperties = {
    width: '30px',
    height: '30px',
    backgroundColor: '#FFF5F0',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
  };

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  };

  const formGroupStyles: React.CSSProperties = {
    marginBottom: '20px',
  };

  const labelStyles: React.CSSProperties = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: '8px',
  };

  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    fontSize: '16px',
    border: '2px solid #E8E8E8',
    borderRadius: '10px',
    outline: 'none',
    transition: 'all 0.3s ease',
  };

  const textareaStyles: React.CSSProperties = {
    ...inputStyles,
    minHeight: '120px',
    resize: 'vertical',
  };

  const selectStyles: React.CSSProperties = {
    ...inputStyles,
    cursor: 'pointer',
  };

  const uploadAreaStyles: React.CSSProperties = {
    border: '2px dashed #E8E8E8',
    borderRadius: '10px',
    padding: '30px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: '#FAFAFA',
  };

  const urgencyOptionsStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px',
  };

  const urgencyCardStyles = (selected: boolean): React.CSSProperties => ({
    padding: '20px',
    borderRadius: '10px',
    border: `2px solid ${selected ? '#FF6B35' : '#E8E8E8'}`,
    backgroundColor: selected ? '#FFF5F0' : 'white',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  });

  const submitButtonStyles: React.CSSProperties = {
    width: '100%',
    padding: '16px',
    backgroundColor: '#FF6B35',
    color: 'white',
    fontSize: '18px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '30px',
  };

  const infoBoxStyles: React.CSSProperties = {
    backgroundColor: '#E3F2FD',
    border: '1px solid #90CAF9',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '20px',
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
  };

  const categories = [
    'Plumbing',
    'Electrical',
    'Carpentry',
    'Painting',
    'Air Conditioning',
    'Appliance Repair',
    'Roofing',
    'Tiling',
    'Welding',
    'Generator Repair',
    'Other',
  ];

  const locations = [
    'Lagos',
    'Abuja',
    'Port Harcourt',
    'Ibadan',
    'Kano',
    'Kaduna',
    'Benin City',
    'Warri',
    'Enugu',
    'Owerri',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, images: files }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h1 style={titleStyles}>Post Your Problem</h1>
          <p style={subtitleStyles}>
            Describe your issue and get quotes from verified artisans
          </p>
        </div>

        <form style={formStyles} onSubmit={handleSubmit}>
          {/* Problem Details Section */}
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <div style={iconStyles}>📝</div>
              Problem Details
            </h2>

            <div style={formGroupStyles}>
              <label style={labelStyles}>Problem Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Leaking kitchen sink"
                style={inputStyles}
                required
                onFocus={(e) => {
                  e.target.style.borderColor = '#FF6B35';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#E8E8E8';
                }}
              />
            </div>

            <div style={formGroupStyles}>
              <label style={labelStyles}>Service Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                style={selectStyles}
                required
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div style={formGroupStyles}>
              <label style={labelStyles}>Detailed Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Please describe the problem in detail..."
                style={textareaStyles}
                required
              />
            </div>

            <div style={formGroupStyles}>
              <label style={labelStyles}>Upload Photos (Optional)</label>
              <div 
                style={uploadAreaStyles}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.currentTarget.style.backgroundColor = '#F0F0F0';
                }}
                onDragLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FAFAFA';
                }}
              >
                <input
                  type="file"
                  id="images"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
                <label htmlFor="images" style={{ cursor: 'pointer' }}>
                  <div style={{ fontSize: '40px', marginBottom: '10px' }}>📷</div>
                  <div style={{ fontWeight: '600', marginBottom: '5px' }}>
                    Click to upload or drag and drop
                  </div>
                  <div style={{ fontSize: '14px', color: '#5A6C7D' }}>
                    {formData.images.length > 0 
                      ? `${formData.images.length} file(s) selected`
                      : 'PNG, JPG up to 10MB'
                    }
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <div style={iconStyles}>📍</div>
              Location
            </h2>

            <div style={gridStyles}>
              <div style={formGroupStyles}>
                <label style={labelStyles}>City *</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  style={selectStyles}
                  required
                >
                  <option value="">Select your city</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div style={formGroupStyles}>
                <label style={labelStyles}>Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street address"
                  style={inputStyles}
                  required
                />
              </div>
            </div>
          </div>

          {/* Urgency Section */}
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <div style={iconStyles}>⏰</div>
              When do you need this fixed?
            </h2>

            <div style={urgencyOptionsStyles}>
              {['ASAP', 'Within 3 days', 'Within a week', 'Flexible'].map(urgency => (
                <div
                  key={urgency}
                  style={urgencyCardStyles(formData.urgency === urgency)}
                  onClick={() => setFormData(prev => ({ ...prev, urgency }))}
                >
                  <div style={{ fontSize: '24px', marginBottom: '5px' }}>
                    {urgency === 'ASAP' && '🚨'}
                    {urgency === 'Within 3 days' && '⚡'}
                    {urgency === 'Within a week' && '📅'}
                    {urgency === 'Flexible' && '🤝'}
                  </div>
                  <div style={{ fontWeight: '600' }}>{urgency}</div>
                </div>
              ))}
            </div>

            <div style={{ ...gridStyles, marginTop: '20px' }}>
              <div style={formGroupStyles}>
                <label style={labelStyles}>Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  style={inputStyles}
                />
              </div>

              <div style={formGroupStyles}>
                <label style={labelStyles}>Preferred Time</label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  style={selectStyles}
                >
                  <option value="">Select time</option>
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 7PM)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Budget Section */}
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <div style={iconStyles}>💰</div>
              Budget Range
            </h2>

            <div style={formGroupStyles}>
              <label style={labelStyles}>Estimated Budget (Optional)</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                style={selectStyles}
              >
                <option value="">Select budget range</option>
                <option value="5000-10000">₦5,000 - ₦10,000</option>
                <option value="10000-25000">₦10,000 - ₦25,000</option>
                <option value="25000-50000">₦25,000 - ₦50,000</option>
                <option value="50000-100000">₦50,000 - ₦100,000</option>
                <option value="100000+">Above ₦100,000</option>
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <div style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <div style={iconStyles}>📞</div>
              Contact Information
            </h2>

            <div style={infoBoxStyles}>
              <div>ℹ️</div>
              <div style={{ fontSize: '14px' }}>
                Your contact details will only be shared with artisans you approve
              </div>
            </div>

            <div style={gridStyles}>
              <div style={formGroupStyles}>
                <label style={labelStyles}>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  style={inputStyles}
                  required
                />
              </div>

              <div style={formGroupStyles}>
                <label style={labelStyles}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="080XXXXXXXX"
                  style={inputStyles}
                  required
                />
              </div>
            </div>

            <div style={formGroupStyles}>
              <label style={labelStyles}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                style={inputStyles}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={submitButtonStyles}
            disabled={isSubmitting}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                                e.currentTarget.style.backgroundColor = '#E55A2B';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(255, 107, 53, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = '#FF6B35';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            {isSubmitting ? 'Posting...' : 'Post Problem'}
          </button>
        </form>

        {/* Additional Information */}
        <div style={{
          marginTop: '40px',
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#2C3E50',
            marginBottom: '20px',
          }}>
            What happens next?
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                icon: '📢',
                title: 'Your problem is posted',
                description: 'Verified artisans in your area will be notified about your request',
              },
              {
                icon: '💬',
                title: 'Receive quotes',
                description: 'Interested artisans will send you quotes and you can chat with them',
              },
              {
                icon: '✅',
                title: 'Choose your artisan',
                description: 'Compare quotes, reviews, and profiles to select the best artisan',
              },
              {
                icon: '🛠️',
                title: 'Get it fixed',
                description: 'The artisan completes the job and you pay securely through the platform',
              },
            ].map((step, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '15px',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#FFF5F0',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  flexShrink: 0,
                }}>
                  {step.icon}
                </div>
                <div>
                  <div style={{
                    fontWeight: '600',
                    color: '#2C3E50',
                    marginBottom: '5px',
                  }}>
                    {step.title}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#5A6C7D',
                    lineHeight: 1.5,
                  }}>
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Box */}
        <div style={{
          marginTop: '30px',
          backgroundColor: '#FFF5F0',
          borderRadius: '20px',
          padding: '30px',
          border: '1px solid #FFE0D0',
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#2C3E50',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            💡 Tips for getting the best results
          </h3>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}>
            {[
              'Be as detailed as possible when describing your problem',
              'Upload clear photos to help artisans understand the issue better',
              'Set a realistic budget range to attract quality artisans',
              'Respond promptly to artisan messages for faster service',
              'Check artisan reviews and ratings before making a selection',
            ].map((tip, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '15px',
                  color: '#5A6C7D',
                  lineHeight: 1.5,
                }}
              >
                <span style={{
                  color: '#FF6B35',
                  fontWeight: 'bold',
                  flexShrink: 0,
                }}>
                  ✓
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}