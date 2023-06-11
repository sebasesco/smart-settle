import React from 'react'
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export const Contact = () => {
    return (
        <ContactForm />
    )
}


export function ContactForm() {
    return (
    <Container bg="white" maxW="full" mt={0} centerContent overflow="hidden">
    <Flex>
        <Box 
        bg="gray.100"
        color="#0B0E3F"
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}>
        <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
            <WrapItem>
                <Box>
                <Heading>Contact</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#0B0E3F">
                    Fill up the form below to contact
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                    <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#0B0E3F"
                        _hover={{ border: '2px solid #BA68C8' }}
                        leftIcon={<MdPhone color="#BA68C8" size="20px" />}>
                        +91-988888888
                    </Button>
                    <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#0B0E3F"
                        _hover={{ border: '2px solid #BA68C8' }}
                        leftIcon={<MdEmail color="#BA68C8" size="20px" />}>
                        hello@abc.com
                    </Button>
                    <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#0B0E3F"
                        _hover={{ border: '2px solid #BA68C8' }}
                        leftIcon={<MdLocationOn color="#BA68C8" size="20px" />}>
                        Karnavati, India
                    </Button>
                    </VStack>
                </Box>
                <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: 'purple.300' }}
                    icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: 'purple.300' }}
                    icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                    aria-label="discord"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: 'purple.300' }}
                    icon={<BsDiscord size="28px" />}
                    />
                </HStack>
                </Box>
            </WrapItem>
            <WrapItem>
                <Box bg="white" borderRadius="lg">
                <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                    <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                        />
                        <Input type="text" size="md" />
                        </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                        />
                        <Input type="text" size="md" />
                        </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                        borderColor="gray.300"
                        _hover={{
                            borderRadius: 'gray.300',
                        }}
                        placeholder="message"
                        />
                    </FormControl>
                    <FormControl id="name" float="right">
                        <Button
                        variant="solid"
                        bg="purple.400"
                        color="white"
                        _hover={{bg: "purple.300"}}>
                        Send Message
                        </Button>
                    </FormControl>
                    </VStack>
                </Box>
                </Box>
            </WrapItem>
            </Wrap>
        </Box>
        </Box>
    </Flex>
    </Container>
);
}