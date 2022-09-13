import {
  Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover, PopoverTrigger,
  PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useUserContext } from '../Context/UserContext';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { NavigateBefore } from '@mui/icons-material';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { currentUser, setCurrentUser } = useUserContext();
  const navigate = useNavigate();

  const logOutPassport = async () => {
    try {
      await axios.get("http://localhost:8080/api/user/logout")
    } catch (error) { console.log(error) }
  }

  function handleLogout() {
    logOutPassport()
    localStorage.removeItem("user");
    setCurrentUser(null);
    navigate("/");
  }

  const handleGoToProfile = () => {
    navigate('/Profile')
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue('#5458F6', 'gray.800')}
        minH={'60px'}
        py={{ base: 8 }}
        px={{ base: 10 }}
        borderBottom={2}
        borderStyle={'solid'}
        borderColor={useColorModeValue('white', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            fontSize={'xl'}
            color={useColorModeValue('white', 'white')}>
            Logo
          </Text>

          <Text
            onClick={handleGoToProfile}
            ml={10}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            fontSize={'xl'}
            color={'white'}
            right={'240'}
            cursor = {'pointer'}
            _hover={{
              textDecoration: 'none',
              color: "gray.800",
            }}
            fontWeight={400}
          >
            Profile
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>

          {!currentUser ? (
            <>
              <Button
                as={'a'}
                color={'white'}
                fontSize={'xl'}
                fontWeight={400}
                variant={'link'}
                href={'./Login'}>
                Login
              </Button>
              <Button
                as={'a'}
                color={'white'}
                fontSize={'xl'}
                fontWeight={400}
                variant={'link'}
                href={'./SignUp'}>
                Sign Up
              </Button>
            </>
          ) : (
            <Button
              as={'a'}
              color={'white'}
              fontSize={'xl'}
              fontWeight={400}
              variant={'link'}
              onClick={handleLogout}
              cursor="pointer"
              _hover={{
                textDecoration: 'none',
                color: "gray.800",
              }}
            >
              Log Out
            </Button>)}
        </Stack>

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'xl'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
            fontSize={'xl'}
          >
            {label}
          </Text>
          <Text fontSize={'xl'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  }, {
    label: 'Projects',
    href: 'AllProjects',
  },
  {
    label: 'Add Project',
    href: 'AddProject',
  },
];