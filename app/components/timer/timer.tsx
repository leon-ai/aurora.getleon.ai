import { useState, useEffect } from 'react'

import { CircularProgress, Text, Flexbox } from '@/app/aurora'

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds

  return `${formattedMinutes}:${formattedSeconds}`
}

export function Timer({ value }: { value: number }) {
  const [timeLeft, setTimeLeft] = useState(600)
  const [progress, setProgress] = useState(value)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft > 0) {
          setProgress(prevProgress => prevProgress + (100 / 600))

          return prevTimeLeft - 1
        } else {
          clearInterval(interval)

          return prevTimeLeft
        }
      });
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <CircularProgress value={progress} size="lg">
      <Flexbox gap="xs" alignItems="center" justifyContent="center">
        <Text fontSize="lg" fontWeight="semi-bold">{formatTime(timeLeft)}</Text>
        <Text fontSize="xs" secondary>Total 10 minutes</Text>
      </Flexbox>
    </CircularProgress>
  );
}
