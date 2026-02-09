import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Heart } from "lucide-react";

interface MissionModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MissionModal({ isOpen, onOpenChange }: MissionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-charcoal border-2 border-mustard text-white max-w-2xl rounded-[2rem] overflow-hidden">
        <DialogHeader className="pt-8 px-8">
          <div className="w-16 h-16 bg-mustard rounded-2xl flex items-center justify-center mb-6 animate-bounce">
            <Heart className="text-charcoal fill-charcoal size-8" />
          </div>
          <DialogTitle className="text-4xl md:text-5xl font-serif font-black text-white leading-tight mb-4">
            Our <span className="text-mustard italic">Mission</span>
          </DialogTitle>
          <DialogDescription className="text-xl text-white/70 leading-relaxed font-light">
            Empowering families with dignity and strength.
          </DialogDescription>
        </DialogHeader>
        <div className="px-8 pb-12 space-y-6">
          <p className="text-lg text-white/80 leading-relaxed">
            At Afrobility Family CIC, our mission is to empower families navigating disability with culturally sensitive support, resources, and community. We are dedicated to providing both emotional and practical guidance, ensuring that every family—especially those from African and Caribbean backgrounds—can navigate the journey of disability with dignity, strength, and the right support systems in place.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            Our work encompasses educational advocacy, resource sharing, and creating safe spaces for mutual connection. We believe that no family should have to walk this path alone, and we are committed to building a world where inclusion and understanding are at the forefront of community care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-mustard mb-2">Emotional Support</h4>
              <p className="text-sm text-white/60">Providing safe spaces for families to share, heal, and connect with those who understand their journey.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-mustard mb-2">Practical Guidance</h4>
              <p className="text-sm text-white/60">Navigating EHCPs, educational systems, and legal frameworks with expert advocacy and resources.</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
