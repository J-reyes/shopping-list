interface ActionsBarProps {
    onClearPurchased: () => void;
}

export default function ActionsBar({ onClearPurchased }: ActionsBarProps) {
    return (
        <div> 
            <button onClick={onClearPurchased}>Clear Purchased</button>
        </div>
    )
}