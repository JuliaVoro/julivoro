'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const result = await response.json()
      if (!response.ok || result.error) {
        toast.error('An error occurred! Please try again.')
        return
      }
      toast.success('Message sent successfully!')
      reset()
    } catch (error) {
      toast.error('An error occurred! Please try again.')
    }
  }

  return (
    <section data-oid='u_uw05m'>
      {/* Form */}
      <div data-oid='vyn0rpo'>
        <form
          onSubmit={handleSubmit(processForm)}
          className='mt-16 lg:flex-auto'
          noValidate
          data-oid='no0.pcr'
        >
          <div className='flex flex-col space-y-6' data-oid='n_14o.d'>
            {/* Name */}
            <div data-oid='_j2g3bu'>
              <Input
                id='name'
                type='text'
                placeholder='Name'
                autoComplete='given-name'
                {...register('name')}
                data-oid='iki2xwt'
              />

              {errors.name?.message && (
                <p
                  className='ml-1 mt-2 text-sm text-rose-400'
                  data-oid='8za6je3'
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div data-oid='m-u2wlz'>
              <Input
                type='email'
                id='email'
                autoComplete='email'
                placeholder='Email'
                {...register('email')}
                data-oid='d44xhsu'
              />

              {errors.email?.message && (
                <p
                  className='ml-1 mt-2 text-sm text-rose-400'
                  data-oid='895hqi1'
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div data-oid='fjooxyu'>
              <Textarea
                rows={4}
                placeholder='Message'
                {...register('message')}
                data-oid='9qcqv__'
              />

              {errors.message?.message && (
                <p
                  className='ml-1 mt-2 text-sm text-rose-400'
                  data-oid='ps7im32'
                >
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <div className='mt-6' data-oid='vh16_ja'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full disabled:opacity-50'
              data-oid='kfd58vy'
            >
              {isSubmitting ? 'Submitting...' : 'Contact Us'}
            </Button>
          </div>
          <p className='mt-4 text-xs text-muted-foreground' data-oid='c7c6mgu'>
            By submitting this form, I agree to the{' '}
            <Link href='/privacy' className='font-bold' data-oid='6jbtm6v'>
              privacy&nbsp;policy.
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}
