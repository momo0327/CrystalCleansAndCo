import React from 'react'
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Loader2,
  Clock,
  Thermometer,
  Sparkles,
  Star,
  User,
  ShoppingCart,
  Check,
  ChevronDown,
  ChevronUp,
  Menu,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/product-bottles.png";
import cuteBaby from "@/assets/cute-baby.png";
import pitchersImage from "@/assets/pitchers.jpg";
import productWarmer from "@/assets/product-warmer.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function VideoReviews() {
  return (
    <div>


      {/* Reviews Pouring In Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">The reviews are pouring in</h2>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
              <span className="text-foreground ml-2">Based on 14,224 reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Video Placeholder 1 */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-muted/70 group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-foreground border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>

            {/* Text Review 1 */}
            <div className="space-y-4">
              <Card className="p-6 bg-muted/30 border-0 rounded-3xl">
                <p className="text-foreground mb-4">
                  "Bästa köpet för vårt lilla barn! Värmer perfekt varje gång och batteriet håller hela dagen."
                </p>
                <div>
                  <p className="font-bold text-foreground">Rebecca Larsson</p>
                  <p className="text-sm text-muted-foreground">Sverige, Verified Buyer</p>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30 border-0 rounded-3xl">
                <p className="text-foreground mb-4">
                  "Älskar PortaBaby! Perfekt när vi är ute och reser. Ingen mer kall mjölk för bebisen. Kan inte
                  rekommendera denna produkt nog!"
                </p>
                <div>
                  <p className="font-bold text-foreground">Maria Andersson</p>
                  <p className="text-sm text-muted-foreground">Sverige, Verified Buyer</p>
                </div>
              </Card>
            </div>

            {/* Media Mention */}
            <div className="space-y-4">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-0 rounded-3xl flex flex-col justify-center items-start h-[240px]">
                <p className="text-lg text-foreground mb-4">
                  När du behöver en smart flaskvärmare som kan göra allt, är det PortaBaby.
                </p>
                <p className="font-bold text-primary text-xl">Föräldramagasinet</p>
              </Card>

              <Card className="p-6 bg-muted/30 border-0 rounded-3xl">
                <p className="text-foreground mb-4">
                  "Jag älskar den här produkten - verkligen definitionen av en sak jag aldrig visste att jag behövde och
                  nu kan inte vara utan."
                </p>
                <div>
                  <p className="font-bold text-primary text-sm">BABYGUIDE</p>
                </div>
              </Card>
            </div>

            {/* Video Placeholder 2 */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-muted/70 group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-foreground border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VideoReviews