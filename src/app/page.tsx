import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <section className="m-10 py-3">
                <div className="flex justify-around p-10 items-center">
                    <div>
                        <p className="heading my-2">Hi,</p>
                        <p className="heading my-2">My name is</p>
                        <p className="heading text-blue-500 my-2">Sahil Raj</p>
                        <p className="heading my-2">I am a Developer</p>
                    </div>
                    <div>
                        <div className='rounded-full border-blue-500 border-8'>
                            <Image
                                src="/sahil.jpg"
                                width={350}
                                height={350}
                                alt="Picture of the author"
                                className='rounded-full'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
