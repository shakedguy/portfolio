import React, { useEffect, useState, useContext } from 'react';
import { getUrl } from '../services/clientHelpers';
import { useRouter } from 'next/router';
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Text,
	ModalFooter,
	useDisclosure,
	ListItem,
	OrderedList,
	Spinner,
	Heading,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { fetcher } from '../services/clientHelpers';
import textClasses from '../styles/Text.module.css';
import Layout from '../contexts/Layout';

const SkillsModal = ({ openModal, onModalClose }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [modal, setModal] = useState(null);
	const router = useRouter();
	const { data, error } = useSWR(`/api/modal/${getUrl(router.query.skillid)}`, fetcher);
	const layoutCtx = useContext(Layout);

	const closeHandler = () => {
		onModalClose();
		onClose();
	};

	useEffect(() => data && data.modal && setModal(data.modal), [data]);

	useEffect(() => {
		openModal && onOpen();
		!openModal && onClose();
	}, [openModal, onOpen, onClose]);

	let textScheme;
	let titleScheme;
	if (layoutCtx.currentColorMode === 'dark') {
		textScheme = textClasses.modalTextDark;
		titleScheme = textClasses.modalTitletDark;
	} else {
		textScheme = textClasses.modalTextLight;
		titleScheme = textClasses.modalTitletLight;
	}

	if (error) return <Spinner />;
	return (
		<>
			{modal && (
				<Modal
					blockScrollOnMount={false}
					isOpen={isOpen}
					closeOnEsc
					isCentered
					motionPreset='slideInBottom'
					onClose={closeHandler}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>
							<Heading as={'h2'} className={titleScheme}>
								{modal.title}
							</Heading>
						</ModalHeader>
						<ModalCloseButton onClick={closeHandler} />
						<ModalBody>
							<OrderedList spacing={'2.5'}>
								{modal.body &&
									modal.body.map((line, index) => (
										<ListItem key={index}>
											<Text className={textScheme}>{line}</Text>
										</ListItem>
									))}
							</OrderedList>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme='blue' mr={3} onClick={closeHandler}>
								Close
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
		</>
	);
};
export default SkillsModal;
