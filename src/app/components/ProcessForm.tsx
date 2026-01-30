import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';
import { Checkbox } from '@/app/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { CheckCircle2 } from 'lucide-react';

interface ProcessFormData {
  fullName: string;
  email: string;
  phone: string;
  propertyLocation: string;
  contactMethod: string;
  consent: boolean;
}

export function ProcessForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProcessFormData>();

  const contactMethod = watch('contactMethod');
  const consent = watch('consent');

  const onSubmit = async (data: ProcessFormData) => {
    console.log('Process form submitted:', data);
    // TODO: lead_created → CRM entry, Everflow ping
    // TODO: consent_given → store flag, enable Dovly notifications
    // TODO: lead_followup → schedule reminder, escalate if no contact in 24h
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-xl max-w-lg w-full mx-auto">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle2 className="w-14 h-14" style={{ color: '#C9A24A' }} />
          </div>
          <h3 className="text-2xl" style={{ color: '#0B2340' }}>
            You're on the List
          </h3>
          <p className="text-base leading-relaxed" style={{ color: '#2E2E2E' }}>
            A CR Equity specialist will reach out to schedule a consultation and
            explain how Dovly can help qualified buyers move forward.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="mt-4"
            style={{ backgroundColor: '#C9A24A', color: '#ffffff' }}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-xl max-w-lg w-full mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm" style={{ color: '#0B2340' }}>
            Full Name <span className="text-red-600">*</span>
          </Label>
          <Input
            id="fullName"
            {...register('fullName', { required: 'Full name is required' })}
            className="border-gray-300 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
            style={{ backgroundColor: '#f9fafb' }}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm" style={{ color: '#0B2340' }}>
            Email <span className="text-red-600">*</span>
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
            className="border-gray-300 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
            style={{ backgroundColor: '#f9fafb' }}
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm" style={{ color: '#0B2340' }}>
            Phone <span className="text-red-600">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Phone is required' })}
            className="border-gray-300 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
            style={{ backgroundColor: '#f9fafb' }}
          />
          {errors.phone && (
            <p className="text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="propertyLocation" className="text-sm" style={{ color: '#0B2340' }}>
            Property City and State <span className="text-red-600">*</span>
          </Label>
          <Input
            id="propertyLocation"
            {...register('propertyLocation', {
              required: 'Property location is required',
            })}
            placeholder="e.g., Austin, TX"
            className="border-gray-300 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
            style={{ backgroundColor: '#f9fafb' }}
          />
          {errors.propertyLocation && (
            <p className="text-xs text-red-600">{errors.propertyLocation.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactMethod" className="text-sm" style={{ color: '#0B2340' }}>
            Preferred Contact Method
          </Label>
          <Select
            value={contactMethod}
            onValueChange={(value) => setValue('contactMethod', value)}
          >
            <SelectTrigger
              className="border-gray-300 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
              style={{ backgroundColor: '#f9fafb' }}
            >
              <SelectValue placeholder="Select contact method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="email">Email</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => setValue('consent', checked as boolean)}
              className="mt-1 border-gray-400 data-[state=checked]:bg-[#C9A24A] data-[state=checked]:border-[#C9A24A]"
            />
            <Label
              htmlFor="consent"
              className="text-sm leading-relaxed cursor-pointer"
              style={{ color: '#2E2E2E' }}
            >
              I agree to be contacted by CR Equity and partner Dovly.{' '}
              <span className="text-red-600">*</span>
            </Label>
          </div>
          {errors.consent && (
            <p className="text-xs text-red-600 pl-8">Consent is required to proceed</p>
          )}
        </div>

        <div className="pt-1 pb-4">
          <p className="text-xs leading-relaxed" style={{ color: '#2E2E2E', opacity: 0.8 }}>
            CR Equity and Dovly will use your contact details to provide services and
            communications. You can opt out at any time.{' '}
            <a href="#" className="underline" style={{ color: '#C9A24A' }}>
              See our privacy policy
            </a>
            .
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Button
            type="submit"
            disabled={!consent}
            className="w-full text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#C9A24A' }}
          >
            Start Now
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full hover:bg-opacity-5"
            style={{
              borderColor: '#0B2340',
              color: '#0B2340',
              borderWidth: '2px',
            }}
          >
            Request Consultation
          </Button>
        </div>
      </form>
    </div>
  );
}
