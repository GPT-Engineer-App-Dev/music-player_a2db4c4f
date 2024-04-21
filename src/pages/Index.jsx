// Complete the Index page component for a Music Player
import { Box, Button, Image, Text, VStack, HStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, useBoolean } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  const [isPlaying, setIsPlaying] = useBoolean(false);

  // Dummy data for the current song
  const song = {
    title: "Summer Memories",
    artist: "John Doe",
    albumCover: "https://images.unsplash.com/photo-1609931386751-940a91933d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBtZW1vcmllcyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzEzNzExNTg3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  };

  // Handlers for play/pause, next, and previous
  const handlePlayPause = () => {
    setIsPlaying.toggle();
  };

  const handleNext = () => {
    // Logic to go to the next song
  };

  const handlePrevious = () => {
    // Logic to go to the previous song
  };

  return (
    <VStack spacing={4} align="center" justify="center" h="100vh" bg="gray.900" color="white">
      <Image boxSize="200px" src={song.albumCover} alt="Album cover" borderRadius="full" />
      <Text fontSize="2xl" fontWeight="bold">
        {song.title}
      </Text>
      <Text fontSize="md">{song.artist}</Text>
      <HStack spacing={8}>
        <Button onClick={handlePrevious} variant="ghost" fontSize="2xl">
          <FaBackward />
        </Button>
        <Button onClick={handlePlayPause} colorScheme="purple" size="lg" fontSize="2xl">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        <Button onClick={handleNext} variant="ghost" fontSize="2xl">
          <FaForward />
        </Button>
      </HStack>
      <Slider aria-label="song-progress" defaultValue={30} min={0} max={100} colorScheme="purple">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </VStack>
  );
};

export default Index;
