export function generateDesignerBracket(count) {
    const BASE = import.meta.env.BASE_URL;
    const participantsCount = Math.max(2, Math.min(99, Number(count)));

    // Ближайшая степень двойки
    const bracketSize = 2 ** Math.ceil(Math.log2(participantsCount));

    const rounds = [];
    let matchId = 1;

    // Создаём первый раунд
    const firstRound = [];

    for (let i = 0; i < bracketSize; i += 2) {
        firstRound.push({
            id: matchId++,
            teams: [
                i < participantsCount
                    ? {
                        id: i + 1,
                        name: `Участник ${i + 1}`,
                        logo: `${BASE}/logo.png`
                    }
                    : null,

                i + 1 < participantsCount
                    ? {
                        id: i + 2,
                        name: `Участник ${i + 2}`,
                        logo: `${BASE}/logo.png`
                    }
                    : null
            ],
            winnerId: null
        });
    }

    rounds.push(firstRound);

    // Создаём следующие раунды
    let matchesCount = bracketSize / 4;

    while (matchesCount >= 1) {
        const round = [];

        for (let i = 0; i < matchesCount; i++) {
            round.push({
                id: matchId++,
                teams: [null, null],
                winnerId: null
            });
        }

        rounds.push(round);
        matchesCount = Math.floor(matchesCount / 2);
    }

    return rounds;
}