"use client";
import { RestaurantsResponse } from '@/app/restaurants';
import { MapPin, Phone, Star } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ShareButton from '../ui/shared-button';

interface Props {
    restaurant: RestaurantsResponse;
}
export default function RestaurantDetails({ restaurant }: Props) {
    const { name, rating, contact, address } = restaurant;
    const router = useRouter();

    return (
        <>
            <div className='flex flex-col w-full items-center justify-center p-6 '>

                <div className='flex gap-4 mb-6 justify-center items-center'>
                    <h2 className='text-4xl font-bold'>{name}</h2>
                    <div className="flex items-center gap-3 bg-yellow-500 text-white px-5 py-2 rounded-xl shadow">
                        <Star size={24} className="fill-white" />
                        <span className="text-2xl font-bold">{rating}</span>
                    </div>
                </div>

                <div className='grid grid-cols-12 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm max-w-full md:max-w-[70%] mx-auto'>
                    <div className='col-span-12 md:col-span-6 p-4 '>
                        <div className='flex gap-y-4 flex-col'>
                            <div className='flex flex-col gap-y-2 '>
                                <p className='flex text-yellow-700 gap-2'><MapPin size={20} />  Address</p>
                                <p>{address.street}, {address.city}, {address.state}</p>
                            </div>
                            <div className='flex flex-col gap-y-2 '>
                                <p className='flex text-yellow-700 gap-2'><Phone size={20} />  Phone</p>
                                <p>{contact.phone}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-6 p-4'>
                        <div className='flex gap-y-4 flex-col'>
                            <div className='flex flex-col gap-y-2 '>
                                <p className='flex text-yellow-700 gap-2'><MapPin size={20} />  Email</p>
                                <p className='break-all'>{contact.email}</p>
                            </div>
                            <div className='flex flex-col gap-y-2 '>
                                <p className='flex text-yellow-700 gap-2'><Phone size={20} />  WebSite</p>
                                <Link href={contact.site}><p className='text-yellow-600 underline break-all'>{contact.site}</p></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-4'>

                    <ShareButton idRestaurant={restaurant.id} />
                    <button

                        onClick={() => router.push("/restaurants")}
                        className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600"
                    >
                        Regresar
                    </button>
                </div>

            </div>
        </>
    )
}
