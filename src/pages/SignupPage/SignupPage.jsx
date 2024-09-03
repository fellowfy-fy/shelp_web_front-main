import {
	Flex, VStack, Box, Image,
	Button,
	Container,
	Divider,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Stack,
	Text,
	IconButton,
	InputRightElement,
	useDisclosure,
} from "@chakra-ui/react";
import { Logo } from './Logo'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { HiOutlineAtSymbol } from 'react-icons/hi'
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { HiEye, HiEyeOff, HiOutlineKey,HiPencil,HiOutlineUserCircle } from 'react-icons/hi'
import { useRef } from 'react'

const SignupPage = () => {
	const { isOpen, onToggle } = useDisclosure()
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});
	
	const inputRef = useRef(null)
	const { loading, error, login } = useLogin();
	const onClickReveal = () => {
		onToggle()
		if (inputRef.current) {
		  inputRef.current.focus({ preventScroll: true })
		}
	  }

	return (
		<Flex bgImage="linear-gradient(rgba(55, 216, 255, 0.7), rgba(151, 43, 0, 0.7)), url(bwp.jpg)" minH={"100vh"} justifyContent={"center"} alignItems={"center"} >
			<Container maxW="lg"  px={{ base: '2', sm: '8' }}>
				<Stack spacing="8">
					<Box
						py={{ base: '0', sm: '8' }}
						px={{ base: '4', sm: '10' }}
						bg={{ base: 'white', sm: 'bg.surface' }}
						boxShadow={{ base: 'xl', sm: 'xl' }}
						borderRadius={{ base: 'm', sm: 'xl' }}
						border='2px' borderColor='#eeeeee'
					>
						<Stack spacing={3}>
							<Stack spacing={0}>
								<Logo />
								<Stack spacing={{ base: '2', md: '3' }} textAlign="center">
									<Heading fontWeight={500} size={{ base: 'md', md: 'md' }}>Space for your shopping ideas</Heading>
								</Stack>
							</Stack>
							<Stack spacing="6">
								<Stack spacing="5">
								<FormControl>
										<FormLabel mb={0} fontWeight={400} htmlFor="email">Email</FormLabel>
										<InputGroup>
											<InputLeftElement
												pointerEvents="none"
												children={<HiOutlineAtSymbol color="#53abe9" />}
											/>
											<Input id="email"  border='2px' borderColor='gray.200' type="email" value={inputs.email}
												onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
										</InputGroup>
									</FormControl>
									<FormControl>
										<FormLabel  mb={0} fontWeight={400} htmlFor="username">Username</FormLabel>
										<InputGroup>
											<InputLeftElement
												pointerEvents="none"
												children={<HiOutlineUserCircle color="#53abe9" />}
											/>
											<Input id="username" border='2px' borderColor='gray.200' type="text" value={inputs.username}
												onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
										</InputGroup>
									</FormControl>
									<FormControl>
										<FormLabel mb={0}  fontWeight={400}  htmlFor="fname">Full name</FormLabel>
										<InputGroup>
											<InputLeftElement
												pointerEvents="none"
												children={<HiPencil color="#53abe9" />}
											/>
											<Input  border='2px' borderColor='gray.200' id="fname" type="text" value={inputs.fname}
												onChange={(e) => setInputs({ ...inputs, fname: e.target.value })} />
										</InputGroup>
									</FormControl>
									<FormControl>
										<FormLabel mb={0} fontWeight={400} htmlFor="password">Password</FormLabel>
										<InputGroup>
											<InputLeftElement
												pointerEvents="none"
												children={<HiOutlineKey color="#53abe9" />}
											/>
											<InputRightElement>
												<IconButton
													variant="text"
													aria-label={isOpen ? 'Mask password' : 'Reveal password'}
													icon={isOpen ? <HiEyeOff /> : <HiEye />}
													onClick={onClickReveal}
												/>
											</InputRightElement>
											<Input
											 border='2px' borderColor='gray.200'
												id="password"
												name="password"
												type={isOpen ? 'text' : 'password'}
												autoComplete="current-password"
												required
												ref={inputRef}
												value={inputs.password}
												onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
											/>
										</InputGroup>
									</FormControl>
								</Stack>
								<Stack spacing="6">
									{
									error && (
										<Alert status='error' fontSize={13} p={2} borderRadius={4}>
											<AlertIcon fontSize={12} />
											{error}
										</Alert>
									)}
									<Button
										isLoading={loading}
										onClick={() => login(inputs)}
										_hover={{
											transform: 'scale(1.05)',
											transitionDuration: '0.2s',
											transitionTimingFunction: "ease-in-out"
										}} color={"white"} bgGradient='linear(to-r, #68eecc, #53abe9)'>SIGN UP</Button>
									<HStack>
										<Divider />
										<Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
											OR
										</Text>
										<Divider />
									</HStack>
									<OAuthButtonGroup />
								</Stack>
							</Stack>
							<Stack spacing="6">
								<Stack spacing={{ base: '2', md: '3' }} textAlign="center">
									<Text color="fg.muted">
										Already have account? <Link color="#53abe9" fontWeight={600} href="/login">Login</Link>
									</Text>
								</Stack>
							</Stack>
						</Stack>
					</Box>
				</Stack>

			</Container>
		</Flex>
	);
};

export default SignupPage;
