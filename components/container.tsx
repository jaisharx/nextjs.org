import { Box } from '@chakra-ui/layout'

export default function Container(props) {
  return (
    <Box maxW="1024px" mx="auto" {...props}>
      {props.children}
    </Box>
  )
}
