import React, { createContext, useContext, useState, ReactNode } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';

// Definindo a interface do contexto para incluir `load`, `start`, e `stop`
interface ReloadContextType {
    load: boolean;
    start: () => void;
    stop: () => void;
}

// Definição do contexto para o recarregamento
const ReloadContext = createContext<ReloadContextType | undefined>(undefined);

// Provedor do contexto
interface ReloadProviderProps {
    children: ReactNode;
}

export const ReloadProvider = ({ children }: ReloadProviderProps) => {
    const [load, setLoad] = useState(false);

    const start = () => {
        setLoad(true);
    }

    const stop = () => {
        setLoad(false);
    }

    return (
        <ReloadContext.Provider value={{ load, start, stop }}>
            <View style={{ flex: 1 }}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={load} // Estado de carregamento
                            onRefresh={start}
                        />
                    }
                >
                    {children}
                </ScrollView>
            </View>
        </ReloadContext.Provider>
    );
};

// Hook para consumir o contexto
export const useReload = () => {
    const context = useContext(ReloadContext);
    
    if (!context) {
        throw new Error('useReload must be used within a ReloadProvider');
    }

    return context;
};
