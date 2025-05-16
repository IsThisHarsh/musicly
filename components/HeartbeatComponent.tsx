"use client";

import { useEffect } from 'react';
import useHeartbeat from '@/hooks/useHeartbeat';

// This is a client component that doesn't render anything visible
// It just handles the heartbeat logic
export const HeartbeatComponent = () => {
    const { lastHeartbeat, error } = useHeartbeat();

    // Log for debugging purposes
    useEffect(() => {
        if (lastHeartbeat) {
            console.log(`Last heartbeat sent at: ${lastHeartbeat.toISOString()}`);
        }

        if (error) {
            console.error('Heartbeat error:', error);
        }
    }, [lastHeartbeat, error]);

    // This component doesn't render anything visible
    return null;
};

export default HeartbeatComponent;