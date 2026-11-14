import type { Round } from "tournaments-bracket";

export const rounds: Round[] = [
  [
    {
      "id": 1,
      "teams": [
        {
          "id": 1,
          "name": "Team A",
          "logo": "../public/logo.png"
        },
        {
          "id": 2,
          "name": "Team B",
          "logo": "../public/logo.png"
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
          "logo": "../public/logo.png"
        },
        {
          "id": 4,
          "name": "Team D",
          "logo": "../public/logo.png"
        }
      ],
      "winnerId": 0
    }
  ],
  [
    {
      "id": 3,
      "teams": [
        {
          "id": 2,
          "name": "Team B",
          "logo": "../public/logo.png"
        },
        {
          "id": 3,
          "name": "Team C",
          "logo": "../public/logo.png"
        },
      ],
      "winnerId": 0
    }
  ]
];
