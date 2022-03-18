import {
    Avatar,
    AvatarGroup,
    Box,
    Center,
    DarkMode,
    Flex,
    Heading,
    HStack,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
//   import { Logo } from './Logo'
  import  AppBarSignIn  from '../../Components/AppLogin/index.jsx'
  
   function Auth () {
       return(
    <Flex
      minH={{ base: 'auto', md: '100vh' }}
      bgGradient={useBreakpointValue({
        md: mode(
          'linear(to-r, orange.600 50%, white 50%)',
          'linear(to-r, orange.600 50%, gray.900 50%)',
        ),
      })}
    >
      <Flex maxW="8xl" mx="auto" width="full">
        <Box flex="1" display={{ base: 'none', md: 'block' }}>
          <DarkMode>
            <Flex direction="column" px={{ base: '4', md: '8' }} height="full" color="on-accent">
              <Flex flex="1" align="center">
                <Stack spacing="8" color="white">
                  <Stack spacing="6">
                    <Heading size={useBreakpointValue({ md: 'lg', xl: 'xl' })}>
                      Start making your dreams come true
                    </Heading>
                    <Text fontSize="lg" maxW="md" fontWeight="medium">
                      Create an account and discover the worlds' best UI component framework.
                    </Text>
                  </Stack>
                </Stack>
              </Flex>
              <Flex align="center" h="24">
                <Text color="on-accent-subtle" fontSize="sm">
                  © 2022 Chakra UI. All rights reserved.
                </Text>
              </Flex>
            </Flex>
          </DarkMode>
        </Box>
        <Center flex="1">
          <AppBarSignIn
            px={{ base: '4', md: '8' }}
            py={{ base: '12', md: '48' }}
            width="full"
            maxW="md"
          />
        </Center>
      </Flex>
    </Flex>
  )}

  export default Auth;