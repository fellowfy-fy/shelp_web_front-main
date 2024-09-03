import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import LogoImage from '../../assets/logo_b.png'
import {
	Box,
	Flex,
	Avatar,
	HStack,
	Text,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	Center,
	Container
} from '@chakra-ui/react'
import { FaArrowLeft } from "react-icons/fa"
import { HiOutlineViewGrid, HiOutlineCollection } from "react-icons/hi";
import { LuPlusSquare } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { FaRegBell, FaRegMessage } from "react-icons/fa6";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { BiGridAlt } from "react-icons/bi";
const Links = ['Home', 'Discover', 'Following', 'Messages', 'Create']

const NavLink = (props) => {
	const { children } = props

	return (
		<Box
			as="a"
			px={2}
			py={1}
			rounded={'md'}
			_hover={{
				textDecoration: 'none',
				bg: useColorModeValue('gray.200', 'gray.700'),
			}}
			href={'#'}>
			{children}
		</Box>
	)
}


const PageHeader = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
		<Center shadow='navBarShadow' borderBottom={'1px'} borderColor={'gainsboro'} h={{ xl: '70px', md: '70px' }} bg={useColorModeValue('white', 'gray.900')} >
		<Container maxW={"container.xl"}>
				<Flex maxW={{ base: 'container.xl' }} mx={2} width={'100%'} h={'100%'} alignItems={'center'} justifyContent={'space-between'}>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack h={'100%'} spacing={8} alignItems={'center'}>
						<Box> <img h={'60%'} class="mx-auto h-12 w-auto text-center" src={LogoImage} alt="Shelp" /></Box>
						<HStack h={'100%'} as={'nav'} gap={0} display={{ base: 'none', md: 'flex' }}>
							<ChakraLink h={'100%'} as={ReactRouterLink} to='/home'>
								<Button layerStyle={'navButton'} textStyle={'navButton'} variant='solid' h={'100%'} borderRadius={0} background={'transparent'} ><HStack alignContent={'center'} gap={1}><FiHome /><Box textStyle={'navButton'}>Home</Box></HStack></Button>
							</ChakraLink>
							<ChakraLink h={'100%'} layerStyle={'base'} textStyle={'navButton'} as={ReactRouterLink} to='/discover'>
								<Button h={'100%'} textStyle={'navButton'} borderRadius={0} background={'transparent'} ><HStack align={'center'} gap={1}><BiGridAlt /><Box textStyle={'navButton'}>Discover</Box></HStack></Button>
							</ChakraLink>
							<ChakraLink h={'100%'} layerStyle={'base'} textStyle={'navButton'} as={ReactRouterLink} to='/collected'>
								<Button textStyle={'navButton'} variant='solid' h={'100%'} borderRadius={0} background={'transparent'} ><HStack gap={1}><HiOutlineCollection /><Box textStyle={'navButton'}>Collected</Box></HStack></Button>
							</ChakraLink>
							<ChakraLink h={'100%'} layerStyle={'base'} textStyle={'navButton'} as={ReactRouterLink} to='/collected'>
								<Button textStyle={'navButton'} variant='solid' h={'100%'} borderRadius={0} background={'transparent'} ><HStack gap={1}><LuPlusSquare /><Box textStyle={'navButton'}>Create</Box></HStack></Button>
							</ChakraLink>
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<IconButton
							background={'transparent'}
							variant='solid'
							rounded={'full'}
							color={'black'}
							aria-label='Done'
							fontSize='19px'
							icon={<FaRegMessage />}
						/>
						<IconButton
							background={'transparent'}
							variant='solid'
							rounded={'full'}
							aria-label='Done'
							fontSize='19px'
							icon={<FaRegBell />}
						/>
						<Menu>
							<MenuButton
								as={Button}
								background={'transparent'}
								variant='solid'
								border={'1px'}
								borderColor={'black'}
								rounded={'full'}
								cursor={'pointer'}
								color={'black'}
								fontWeight={500}
								textDecoration={'none'}
								
								px={1}
								py={2}
								
								minW={0}
								_hover={{
									bg: 'gray.200'
								}}
							>
									<Avatar
										size={'sm'}
										src={
											'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
										}
									/>
							</MenuButton>
							<MenuList>
								<MenuItem>Link 1</MenuItem>
								<MenuItem>Link 2</MenuItem>
								<MenuDivider />
								<MenuItem>Link 3</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack as={'nav'} spacing={4}>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</Stack>
					</Box>
				) : null}
			</Container>
		</Center>
		</>
	);
};

export default PageHeader;
