import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ShortLeadFormData {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  estimatedPrice?: string;
}

export function ShortLeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ShortLeadFormData>();

  const propertyType = watch('propertyType');

  const onSubmit = async (data: ShortLeadFormData) => {
    console.log('Short lead submitted:', data);
    // TODO: lead_created → email to CR Equity intake, webhook to Everflow
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div
        className="rounded-xl p-6 shadow-lg w-full max-w-md"
        style={{ backgroundColor: '#0B2340' }}
      >
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle2 className="w-12 h-12" style={{ color: '#C9A24A' }} />
          </div>
          <h3 className="text-xl text-white">
            Thanks — Your Request is Received
          </h3>
          <p className="text-sm leading-relaxed text-white opacity-90">
            Expect a call within 24 hours with next steps and a tailored plan.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 text-white hover:opacity-90"
            style={{ backgroundColor: '#C9A24A' }}
          >
            Submit Another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl p-6 shadow-lg w-full max-w-md"
      style={{ backgroundColor: '#0B2340' }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Progress indicator */}
        <div className="flex gap-1.5 mb-6">
          <div
            className="h-1 flex-1 rounded-full"
            style={{ backgroundColor: '#2AB0B0' }}
          />
          <div
            className="h-1 flex-1 rounded-full"
            style={{ backgroundColor: 'rgba(42, 176, 176, 0.3)' }}
          />
          <div
            className="h-1 flex-1 rounded-full"
            style={{ backgroundColor: 'rgba(42, 176, 176, 0.3)' }}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-sm text-white">
            Name <span style={{ color: '#C9A24A' }}>*</span>
          </Label>
          <Input
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-xs" style={{ color: '#C9A24A' }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-sm text-white">
            Phone <span style={{ color: '#C9A24A' }}>*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Phone is required' })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="text-xs" style={{ color: '#C9A24A' }}>
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm text-white">
            Email <span style={{ color: '#C9A24A' }}>*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-xs" style={{ color: '#C9A24A' }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="propertyType" className="text-sm text-white">
            Property Type
          </Label>
          <Select
            value={propertyType}
            onValueChange={(value) => setValue('propertyType', value)}
          >
            <SelectTrigger
              className="bg-white/10 border-white/20 text-white focus:border-[#C9A24A] focus:ring-[#C9A24A]"
              style={{
                color: propertyType ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
              }}
            >
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single-family">Single Family</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhome">Townhome</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="estimatedPrice" className="text-sm text-white">
            Estimated List Price
          </Label>
          <Input
            id="estimatedPrice"
            {...register('estimatedPrice')}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
            placeholder="$500,000"
          />
        </div>

        <div className="pt-2 pb-3">
          <p className="text-xs leading-relaxed text-white opacity-75">
            We use your information to contact you about your property and to share
            with our partner Dovly for buyer qualification.{' '}
            <a href="#" className="underline" style={{ color: '#C9A24A' }}>
              See privacy policy
            </a>{' '}
            for details.
          </p>
        </div>

        <Button
          type="submit"
          className="w-full text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#C9A24A' }}
        >
          Get Quote <ArrowRight className="ml-2 w-4 h-4" />
        </Button>

        <div className="text-center pt-2">
          <button
            type="button"
            className="text-sm underline"
            style={{ color: '#C9A24A' }}
          >
            See How It Works
          </button>
        </div>
      </form>

      {/* Partner callout */}
      <div className="mt-6 pt-5 border-t border-white/20 text-center">
        <p className="text-xs text-white opacity-75">
          Buyer support powered by{' '}
          <span style={{ color: '#2AB0B0' }}>Dovly AI</span>
        </p>
      </div>
    </div>
  );
}
