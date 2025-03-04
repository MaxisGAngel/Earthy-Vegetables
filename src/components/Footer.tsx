import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-item">
            <Mail className="w-4 h-4 mr-2" />
            <span>info@growyourown.com</span>
          </div>
          <div className="footer-item">
            <Phone className="w-4 h-4 mr-2" />
            <span>0800 123 456</span>
          </div>
          <div className="footer-item">
            <MapPin className="w-4 h-4 mr-2" />
            <span>123 Garden Street, Green City</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;