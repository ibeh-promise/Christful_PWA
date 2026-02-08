/**
 * Formats a date string or Date object into a relative time string (e.g., "3 mins ago", "2 days ago")
 * @param date The date to format
 * @returns A relative time string
 */
export function formatRelativeTime(date: string | Date): string {
    if (!date) return "Long ago";

    const now = new Date();
    const then = new Date(date);

    // Check for invalid date
    if (isNaN(then.getTime())) return "Unknown date";

    const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);

    if (seconds < 60) return "Just now";

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;

    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;

    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks}w ago`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo ago`;

    const years = Math.floor(days / 365);
    return `${years}y ago`;
}
