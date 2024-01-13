import React from 'react'
import Image from 'next/image';
import { Bodoni_Moda } from 'next/font/google';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"], display: "swap" })

function CouncilCard({ name, description }: { name: string, description: string }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<div>
			<div className='bg-[#f3f5d8] rounded-lg lg:w-36 md:w-36 w-[100%] p-4 border border-[#b23727] shadow-md text-wrap break-words min-h-52 grid grid-cols-1 items-start hover:scale-105 cursor-pointer' onClick={onOpen}>
				<Image src="/un-logo.png" alt='monas' quality={100} width={120} height={100} className='h-auto' />
				<p className={`text-[#b23727] ${bodoni.className} text-md mt-3 text-center`}>{name}</p>

			</div>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" className='bg-[#f3f5d8] text-[#b23727]' >
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
							<ModalBody>
								<p>{description}</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
									dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
									Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
									Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
									proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
									dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
									Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
									Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
									proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
									dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
									Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
									Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
									proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
									dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
									Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
									Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
									proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
								</p>
							</ModalBody>
							<ModalFooter>
								<Button color="primary" onPress={onClose} className='rounded-full bg-[#f55789]'>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>

	)
}

export default CouncilCard