"use client";

import { useEffect, useState } from 'react';

const HEARTBEAT_INTERVAL = 60 * 1000;;

export const useHeartbeat = () => {
    const [lastHeartbeat, setLastHeartbeat] = useState<Date | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const sendHeartbeat = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch('/api/heartbeat');

            if (!response.ok) {
                throw new Error('Heartbeat request failed');
            }

            const result = await response.json();
            setLastHeartbeat(new Date());

            // Store the last heartbeat time in localStorage
            localStorage.setItem('lastHeartbeat', new Date().toISOString());

            return result;
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Unknown error'));
            console.error('Heartbeat error:', err);
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Check if we're in the browser environment
        if (typeof window === 'undefined') return;

        // Check if we need to send a heartbeat
        const checkAndSendHeartbeat = async () => {
            const storedHeartbeat = localStorage.getItem('lastHeartbeat');

            if (!storedHeartbeat) {
                // No heartbeat has been sent yet, send one now
                await sendHeartbeat();
                return;
            }

            const lastBeat = new Date(storedHeartbeat);
            const now = new Date();
            const timeSinceLastHeartbeat = now.getTime() - lastBeat.getTime();

            // If it's been more than our interval since the last heartbeat, send another
            if (timeSinceLastHeartbeat >= HEARTBEAT_INTERVAL) {
                await sendHeartbeat();
            } else {
                // Update the state with the stored value
                setLastHeartbeat(lastBeat);
            }
        };

        // Run once on mount
        checkAndSendHeartbeat();

        // Set up interval to check periodically (e.g., once per hour)
        // This handles cases where the user keeps the app open for a long time
        const checkInterval = setInterval(() => {
            checkAndSendHeartbeat();
        }, 60 * 60 * 1000); // Check every hour

        return () => clearInterval(checkInterval);
    }, []);

    return {
        lastHeartbeat,
        isLoading,
        error,
        sendHeartbeat
    };
};

export default useHeartbeat;