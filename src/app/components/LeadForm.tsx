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
import { CheckCircle2 } from 'lucide-react';

interface LeadFormData {
  fullName: string;
  email: string;
  phone?: string;
  propertyAddress: string;
  bestTimeToContact: string;
  referralSource?: string;
}

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<LeadFormData>();

  const bestTimeToContact = watch('bestTimeToContact');

  const onSubmit = async (data: LeadFormData) => {
    console.log('Lead submitted:', data);
    // TODO: This will trigger lead_created event
    // Backend will handle: email to ops, Dovly webhook, analytics
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle2 className="w-16 h-16" style={{ color: '#C9A24A' }} />
          </div>
          <h3 className="text-2xl" style={{ color: '#0B2340' }}>
            Thank You
          </h3>
          <p className="text-base leading-relaxed" style={{ color: '#2E2E2E' }}>
            A CR Equity specialist will contact you within one business day. If
            you requested a quote we'll include next steps and an estimated
            timeline.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="mt-4"
            style={{ backgroundColor: '#0B2340' }}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
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
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            className="border-gray-300 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
            style={{ backgroundColor: '#f9fafb' }}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="propertyAddress" className="text-sm" style={{ color: '#0B2340' }}>
            Property Address or ZIP <span className="text-red-600">*</span>
          </Label>
          <Input
            id="propertyAddress"
            {...register('propertyAddress', {
              required: 'Property address or ZIP is required',
            })}
            className="border-gray-300 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
            style={{ backgroundColor: '#f9fafb' }}
          />
          {errors.propertyAddress && (
            <p className="text-xs text-red-600">{errors.propertyAddress.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="bestTimeToContact" className="text-sm" style={{ color: '#0B2340' }}>
            Best Time to Contact
          </Label>
          <Select
            value={bestTimeToContact}
            onValueChange={(value) => setValue('bestTimeToContact', value)}
          >
            <SelectTrigger
              className="border-gray-300 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
              style={{ backgroundColor: '#f9fafb' }}
            >
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning</SelectItem>
              <SelectItem value="afternoon">Afternoon</SelectItem>
              <SelectItem value="evening">Evening</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="referralSource" className="text-sm" style={{ color: '#0B2340' }}>
            How Did You Hear About Us?
          </Label>
          <Input
            id="referralSource"
            {...register('referralSource')}
            className="border-gray-300 focus:border-[#C9A24A] focus:ring-[#C9A24A]"
            style={{ backgroundColor: '#f9fafb' }}
          />
        </div>

        <div className="pt-2 pb-4">
          <p className="text-xs leading-relaxed" style={{ color: '#2E2E2E' }}>
            By submitting you consent to receive communications from CR Equity and
            our partner Dovly AI. We never sell personal data.{' '}
            <a
              href="#"
              className="underline"
              style={{ color: '#C9A24A' }}
            >
              Read our privacy policy
            </a>
            .
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Button
            type="submit"
            className="w-full text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#C9A24A' }}
          >
            Learn More
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
            Get Quote
          </Button>
        </div>
      </form>
    </div>
  );
}
