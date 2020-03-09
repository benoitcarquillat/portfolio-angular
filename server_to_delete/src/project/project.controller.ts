import { Controller } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.entity';
import { Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: Project,
  },
})
@Controller('project')
export class ProjectController {
  constructor(public service: ProjectService) {}
}
