"use client"; // Add this line to indicate that this is a Client Component
import React, { useState } from 'react'; // Combine the imports
import { Menu, ShoppingBag, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

export default function LeemahStore() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    { name: "Elegant Dress", price: "$89.99", image: "/dress1.jpeg?height=1200&width=200" },
    { name: "Stylish Handbag", price: "$59.99", image: "/bag1.jpeg?height=1200&width=200" },
    { name: "Chic Sunglasses", price: "$29.99", image: "/store.jpeg?height=1200&width=200" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Leemah&apos;s Store</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#products" className="hover:underline">Products</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu />
          </Button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden mt-2 px-4 py-2 bg-primary-foreground text-primary">
            <a href="#home" className="block py-2">Home</a>
            <a href="#products" className="block py-2">Products</a>
            <a href="#about" className="block py-2">About</a>
            <a href="#contact" className="block py-2">Contact</a>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <section id="home" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Leemah&apos;s Store</h2>
            <p className="text-xl mb-8">Discover the latest fashion trends and accessories</p>
            <Button size="lg">
              Shop Now
              <ShoppingBag className="ml-2" />
            </Button>
          </div>
        </section>

        <section id="products" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      width={200} 
                      height={200} 
                      className="w-full h-48 object-cover"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Leemah&apos;s Store</h2>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Leemah&apos;s Store is your one-stop destination for trendy fashion and accessories. 
              We curate the best styles to help you express your unique personality. 
              Our commitment to quality and customer satisfaction sets us apart in the fashion industry.
            </p>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Input type="text" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Your Message" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Leemah&apos;s Store. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300"><Facebook /></a>
              <a href="#" className="hover:text-gray-300"><Instagram /></a>
              <a href="#" className="hover:text-gray-300"><Twitter /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
