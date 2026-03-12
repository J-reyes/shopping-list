interface ActionsBarProps {
    onClearPurchased: () => void;
}

export default function ActionsBar({ onClearPurchased }: ActionsBarProps) {
    return (
        <div className="actions-bar">
            <button className="btn-danger" onClick={onClearPurchased}>Clear Purchased</button>
        </div>
    )
}