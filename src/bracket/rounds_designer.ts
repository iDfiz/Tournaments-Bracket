import type { Round } from "tournaments-bracket";

export const rounds: Round[] = [
  [
    {
      "id": 1,
      "teams": [
        {
          "id": 1,
          "name": "Team A",
          "logo": "/Tournaments-Bracket/logo.png"
        },
        {
          "id": 2,
          "name": "Team B",
          "logo": "/Tournaments-Bracket/logo.png"
        }
      ],
      "winnerId": 0
    },
    {
      "id": 2,
      "teams": [
        {
          "id": 3,
          "name": "Team C",
          "logo": "/Tournaments-Bracket/logo.png"
        },
        {
          "id": 4,
          "name": "Team D",
          "logo": "/Tournaments-Bracket/logo.png"
        }
      ],
      "winnerId": 3
    }
  ],
  [
    {
      "id": 3,
      "teams": [
        {
          "id": 2,
          "name": "Team B",
          "logo": "/Tournaments-Bracket/logo.png"
        },
        {
          "id": 3,
          "name": "Team C",
          "logo": "/Tournaments-Bracket/logo.png"
        },
      ],
      "winnerId": 3
    }
  ]
];
