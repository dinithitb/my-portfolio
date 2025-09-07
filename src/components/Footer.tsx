import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by Dinithi Bandaranayake
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dinithi Bandaranayake. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;