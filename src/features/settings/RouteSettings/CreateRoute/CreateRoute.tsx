import React, { useState } from "react"
import {
    Button,
    ButtonStrip,
    IconAdd16,
    Input,
    Label,
    Modal,
    ModalActions,
    ModalContent,
    ModalTitle
} from "@dhis2/ui"
import i18n from "@dhis2/d2-i18n"
import styles from '../RouteSettings.module.css'
import { useSaveRoute } from "../hooks/useSaveRoute"
import { RouteForm, RouteFormValues } from "../RouteForm"

export const CreateRoute = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const { saveRoute, isSaving } = useSaveRoute({
        onSuccess: () => {
            setIsDialogOpen(false)
        }
    })

    const handleSubmit = (data: RouteFormValues) => {
        saveRoute({ url: data.url })
    }

    const handleOpenDialog = () => {
        setIsDialogOpen(true)
    }

    const handleCloseDialog = () => {
        setIsDialogOpen(false)
    }

    return (
        <>
            <div>
                <p className={styles.mutedText}>{i18n.t('No route found.')}</p>

                <Button
                    onClick={handleOpenDialog}
                    icon={<IconAdd16 />}
                    small
                    loading={isSaving}
                    dataTest="add-route-button"
                >
                    {i18n.t('Add route')}
                </Button>
            </div>

            {isDialogOpen && (
                <RouteForm
                    onClose={handleCloseDialog}
                    onSubmit={handleSubmit}
                    isLoading={isSaving}
                    initialUrl=""
                    modalTitle={i18n.t('Add route')}
                    submitButtonText={i18n.t('Add')}
                />
            )}
        </>
    )
} 