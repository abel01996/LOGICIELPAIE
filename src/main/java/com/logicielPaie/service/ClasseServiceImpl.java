package com.logicielPaie.service;

import com.logicielPaie.model.Classe;
import com.logicielPaie.model.Corps;
import com.logicielPaie.model.Statut;
import com.logicielPaie.repository.ClassRepository;
import com.logicielPaie.repository.CorpsRepository;
import com.logicielPaie.repository.StatutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
@RequiredArgsConstructor
@Service
public class ClasseServiceImpl implements IClasseService{

    private  final ClassRepository classRepository;
    private final StatutRepository statutRepository;
    private  final CorpsRepository corpsRepository;
    @Override
    public Classe saveClasse(Classe classe) {
        return classRepository.save(classe);
    }

    @Override
    public Collection<Classe> getAllClasse() {
        return classRepository.findAllByAndIsDeletedIsFalseOrderByIdDesc();
    }

    @Override
    public Classe updateClasse(Long id, Classe classe) {
        Classe updateClasse = getAllClasseById(id);
        updateClasse.setNomClasse(classe.getNomClasse());
        updateClasse.setCorrespondance(classe.getCorrespondance());
        return classRepository.save(updateClasse);

    }

    @Override
    public void deleteClasse(Long id) {
        Classe deleteClasse= getAllClasseById(id);
        deleteClasse.setDeleted(true);
       classRepository.save(deleteClasse);


    }
    private Classe getAllClasseById(Long id) {
        Classe existingClasse = classRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("votre Classe nexiste pas"));
        return existingClasse;
    }
}
