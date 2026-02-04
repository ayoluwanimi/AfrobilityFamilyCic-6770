import React from 'react';

interface EmailReceiptProps {
    donorName: string;
    amount: number;
    date: string;
    transactionId: string;
}

export const EmailReceiptTemplate = ({ donorName, amount, date, transactionId }: EmailReceiptProps) => {
    return (
        <div style={{
            fontFamily: 'serif',
            color: '#1A1A1A',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '40px',
            border: '1px solid #F3F4F6',
            borderRadius: '24px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#D4AF37',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                }}>
                    <span style={{ fontSize: '24px' }}>❤️</span>
                </div>
                <h1 style={{ fontSize: '24px', fontWeight: '900', margin: 0 }}>Afrobility Family CIC</h1>
                <p style={{ color: '#6B7280', margin: '8px 0 0 0' }}>United in Care</p>
            </div>

            <div style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Thank you for your donation, {donorName}!</h2>
                <p style={{ lineHeight: '1.6', color: '#4B5563' }}>
                    Your generous support helps us continue providing emotional and practical assistance to families navigating disability in our community.
                </p>
            </div>

            <div style={{ 
                backgroundColor: '#F9FAFB', 
                padding: '24px', 
                borderRadius: '16px',
                marginBottom: '32px'
            }}>
                <h3 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9CA3AF', marginBottom: '16px' }}>Donation Summary</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#6B7280' }}>Amount:</span>
                    <span style={{ fontWeight: 'bold' }}>£{amount.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#6B7280' }}>Date:</span>
                    <span>{date}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6B7280' }}>Transaction ID:</span>
                    <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{transactionId}</span>
                </div>
            </div>

            <div style={{ textAlign: 'center', borderTop: '1px solid #F3F4F6', paddingTop: '32px' }}>
                <p style={{ fontSize: '14px', color: '#9CA3AF' }}>
                    Afrobility Family CIC is a registered Community Interest Company.<br />
                    Thank you for making a difference.
                </p>
            </div>
        </div>
    );
};
