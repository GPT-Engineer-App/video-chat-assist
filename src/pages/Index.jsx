import React, { useState } from 'react';
import { Box, Button, Container, Flex, Text, VStack, HStack, Input, Textarea } from "@chakra-ui/react";
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash } from "react-icons/fa";

const Index = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [suggestedAnswers, setSuggestedAnswers] = useState(['Answer 1', 'Answer 2', 'Answer 3']);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, timestamp: new Date().toLocaleTimeString() }]);
      setInputMessage('');
    }
  };

  const handleSelectSuggestedAnswer = (answer) => {
    setMessages([...messages, { text: answer, timestamp: new Date().toLocaleTimeString() }]);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        {/* User Video Section */}
        <Box flex={1} bg="gray.200" p={4} borderRadius="md">
          <Text fontSize="xl" mb={2}>Your Video</Text>
          <Box bg="black" height="200px" mb={2}></Box>
          <HStack spacing={4}>
            <Button onClick={() => setIsMuted(!isMuted)} leftIcon={isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}>
              {isMuted ? 'Unmute' : 'Mute'}
            </Button>
            <Button onClick={() => setIsVideoOn(!isVideoOn)} leftIcon={isVideoOn ? <FaVideo /> : <FaVideoSlash />}>
              {isVideoOn ? 'Turn Video Off' : 'Turn Video On'}
            </Button>
          </HStack>
        </Box>

        {/* AI Interviewer Video Section */}
        <Box flex={1} bg="gray.200" p={4} borderRadius="md">
          <Text fontSize="xl" mb={2}>AI Interviewer Video</Text>
          <Box bg="black" height="200px" mb={2}></Box>
        </Box>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} gap={4} mt={4}>
        {/* Realtime Chat Block */}
        <Box flex={2} bg="gray.100" p={4} borderRadius="md">
          <Text fontSize="xl" mb={2}>Chat</Text>
          <Box bg="white" height="200px" overflowY="scroll" mb={2} p={2} borderRadius="md">
            {messages.map((msg, index) => (
              <Box key={index} mb={2}>
                <Text fontSize="sm" color="gray.500">{msg.timestamp}</Text>
                <Text>{msg.text}</Text>
              </Box>
            ))}
          </Box>
          <HStack>
            <Input value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder="Type a message" />
            <Button onClick={handleSendMessage}>Send</Button>
          </HStack>
        </Box>

        {/* Suggested Answers Block */}
        <Box flex={1} bg="gray.100" p={4} borderRadius="md">
          <Text fontSize="xl" mb={2}>Suggested Answers</Text>
          <VStack spacing={2}>
            {suggestedAnswers.map((answer, index) => (
              <Button key={index} onClick={() => handleSelectSuggestedAnswer(answer)}>{answer}</Button>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;