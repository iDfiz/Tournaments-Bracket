import type { Round } from "tournaments-bracket";

import logo from '../assets/logo.png';

export const rounds: Round[] = [
  [
    {
      "id": 1,
      "teams": [
        {
          "id": 1,
          "name": "Team A",
          "logo": `${logo}`
        },
        {
          "id": 2,
          "name": "Team B",
          "logo": `${logo}`
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
          "logo": `${logo}`
        },
        {
          "id": 4,
          "name": "Team D",
          "logo": `${logo}`
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
          "logo": `${logo}`
        },
        {
          "id": 3,
          "name": "Team C",
          "logo": `${logo}`
        },
      ],
      "winnerId": 3
    }
  ]
];
