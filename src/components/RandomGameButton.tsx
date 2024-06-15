import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Heading } from "@chakra-ui/react";
import { useState } from "react";

const RandomGameButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRandomGame = async () => {
    setLoading(true);
    try {
      const randomPage = Math.floor(Math.random() * 20) + 1;

      const response = await axios.get("https://api.rawg.io/api/games", {
        params: {
          key: "37e5abc41728439989ead896364d0bd1",
          page_size: 100,
          page: randomPage,
        },
      });

      const games = response.data.results;
      const randomGame = games[Math.floor(Math.random() * games.length)];

      setLoading(false);
      navigate(`/games/${randomGame.slug}`);
    } catch (error) {
      console.error("Eroare la preluarea jocurilor:", error);
      setLoading(false);
    }
  };

  return (
    <Heading display="Flex" justifyContent="center">
      <Button
        width="100%"
        maxWidth="600px"
        size="lg"
        isLoading={loading}
        onClick={handleRandomGame}
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.05)",
        }}
        _active={{
          transform: "scale(0.95)",
        }}
        transition="all 0.3s ease"
      >
        Let me chose a game for you
      </Button>
    </Heading>
  );
};

export default RandomGameButton;
