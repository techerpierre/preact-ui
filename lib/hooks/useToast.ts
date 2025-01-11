import { useContext } from "react";
import { ToastContext } from "../components/ui/Toast/ToastContext";

export default function useToast() {
    const { addToast } = useContext(ToastContext);
    return addToast;
}