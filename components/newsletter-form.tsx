'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewsletterFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { subscribe } from '@/lib/actions'
import { Card, CardContent } from '@/components/ui/card'

type Inputs = z.infer<typeof NewsletterFormSchema>

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await subscribe(data)

    if (result?.error) {
      toast.error('An error occurred! Please try again.')
      return
    }

    toast.success('Subscribed successfully!')
    reset()
  }

  return (
    <section data-oid='2ygi5ic'>
      <Card className='rounded-lg border-0 dark:border' data-oid='3vvwqgn'>
        <CardContent
          className='flex flex-col gap-8 pt-6 md:flex-row md:justify-between md:pt-8'
          data-oid='n0w3kk3'
        >
          <div data-oid='dcodw-t'>
            <h2 className='text-2xl font-bold' data-oid='kij6q96'>
              Subscribe to my newsletter
            </h2>
            <p className='text-muted-foreground' data-oid='daibajr'>
              Get updates on my work and projects.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(processForm)}
            className='flex flex-col items-start gap-3'
            data-oid='qpi3_ub'
          >
            <div className='w-full' data-oid='fo7r_pq'>
              <Input
                type='email'
                id='email'
                autoComplete='email'
                placeholder='Email'
                className='w-full'
                {...register('email')}
                data-oid='tpb0sjc'
              />

              {errors.email?.message && (
                <p
                  className='ml-1 mt-2 text-sm text-rose-400'
                  data-oid='du819pd'
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className='w-full' data-oid='a2:hswx'>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full disabled:opacity-50'
                data-oid='.k.5iuf'
              >
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </Button>
            </div>

            <div data-oid='od:_ni-'>
              <p className='text-xs text-muted-foreground' data-oid='h70vrpu'>
                <Link href='/privacy-policy' className='font-bold' data-oid='d0ct8yr'>
                  Read privacy policy
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
